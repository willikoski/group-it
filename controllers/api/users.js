const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendPasswordResetEmail } = require('../../src/email/email-api');

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

function createJWT(user, rememberMe) {
  let expiresIn = '24h'; // Default expiration time (24 hours)
  if (rememberMe) {
    expiresIn = '30d'; // 30 days expiration if rememberMe is true
  }
  const jwtToken = jwt.sign(
    { user },
    JWT_SECRET,
    { expiresIn }
  );
  return jwtToken;
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
      res.status(400).json(e);
    }
  },

  async loginUser(req, res) {
    try {
      console.log('Logging in user with data:', req.body);
      const { email, password, rememberMe } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const token = createJWT(user, rememberMe);
  
      console.log('User logged in successfully:', user);
      res.json({ user, token });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async showUser(req, res) {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
},

  async indexAll(req, res, next) {
    try {
        const user = await User.find()
        res.status(200).json(user)
      } catch (error) {
        res.status(400).json({message: error.message})
      }
    },

  async resetPassword(req, res) {
    try {
      console.log('Resetting password for user with data:', req.body);
      const { email } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const temporaryPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = await bcrypt.hash(temporaryPassword, 10);

      const temporaryToken = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '30m' });
      user.password = hashedPassword;
      user.passwordResetToken = temporaryToken;
      await user.save();

      console.log('Password reset successful for user:', user);
      await sendPasswordResetEmail(email, temporaryPassword, temporaryToken);

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

      const user = await User.findOne({ passwordResetToken: token });
      if (!user) {
        return res.status(404).json({ message: 'User not found or token expired' });
      }

      user.password = newPassword;
      user.passwordResetToken = null;
      await user.save();

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


