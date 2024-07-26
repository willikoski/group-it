const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendPasswordResetEmail } = require('../../src/email/email-api');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const SALT_ROUNDS = 12;

function createJWT(user, rememberMe) {
  let expiresIn = '24h'; // Default expiration time (24 hours)
  if (rememberMe) {
    expiresIn = '30d'; // 30 days expiration if rememberMe is true
  }
  return jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn });
}

module.exports = {
  async createUser(req, res, next) {
    try {
      const user = await User.create(req.body);
      console.log('Created user:', user);
      const token = createJWT(user, false); // Default expiration
      console.log('JWT token:', token);
      res.locals.data = { user, token };
      next();
    } catch (e) {
      console.log('Database problem occurred', e);
      res.status(400).json({ message: e.message });
    }
  },

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      console.log('Received login request:', { email, password });
  
      const user = await User.findOne({ email });
      if (!user) {
        console.log('User not found');
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      console.log('Stored Password Hash:', user.password);
  
      const isMatch = await bcrypt.compare(password, user.password);
      console.log('Password Comparison Result:', isMatch);
  
      if (!isMatch) {
        console.log('Password does not match');
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const token = createJWT(user, req.body.rememberMe);
      return res.json({ user, token });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  },

  async showUser(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async indexAll(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async resetPassword(req, res) {
    try {
        const { email } = req.body;
        console.log('Resetting password for user with email:', email);

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate a temporary password
        const temporaryPassword = Math.random().toString(36).slice(-8);
        console.log('Temporary Password (plaintext):', temporaryPassword);

        // Update user with temporary password and reset token
        user.password = temporaryPassword; // No manual hashing needed here
        user.passwordResetToken = {
            token: jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '30m' }),
            expiresAt: Date.now() + 1800000 // 30 minutes
        };

        await user.save(); // Middleware will hash the password
        console.log('User after saving new temp password and reset token:', user);

        // Send email with temporary password and reset token
        await sendPasswordResetEmail(email, temporaryPassword, user.passwordResetToken.token);

        return res.status(200).json({ message: 'Password reset successful. Check your email for the temporary password and token.' });
    } catch (error) {
        console.error('Error resetting password:', error);
        return res.status(500).json({ message: 'Server error' });
    }
},
  
async updatePasswordWithToken(req, res) {
  try {
      const { token } = req.params;
      const { newPassword } = req.body;
      console.log('Received token:', token);
      console.log('Received new password:', newPassword);

      // Find user with the provided reset token
      const user = await User.findOne({
          'passwordResetToken.token': token,
          'passwordResetToken.expiresAt': { $gte: new Date() } // Ensure token has not expired
      });
      if (!user) {
          console.log('User not found or token expired');
          return res.status(404).json({ message: 'User not found or token expired' });
      }

      // Update user with the new password and clear the reset token
      user.password = newPassword; // No manual hashing needed here
      user.passwordResetToken = { token: null, expiresAt: null }; // Clear the reset token

      await user.save(); // Middleware will hash the password

      console.log('Password updated successfully for user:', user);
      return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
      console.error('Error updating password:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
},
  
  async authenticate(req, res) {
    res.json(res.locals.data.token);
  }
};
