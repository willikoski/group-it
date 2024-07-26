const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('./config');

async function testPasswordHashing() {
  try {
    const password = 'sc41dj4d';
    // Generate a hash of the password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    console.log('Plaintext Password:', password);
    console.log('Generated Hashed Password:', hashedPassword);

    // Compare the password with the generated hash (should be true)
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Password Match Result:', isMatch);

    // Compare with a stored hash (replace with the actual stored hash)
    const storedHash = '$2b$12$y1SX99sfyEZlua2oIQPbb.S5PeY5KaGxSCm4yKtnZzFbd2DjcoRGq'; // Example hash
    const isMatchStored = await bcrypt.compare(password, storedHash);
    console.log('Password Match with Stored Hash:', isMatchStored);
  } catch (error) {
    console.error('Error:', error);
  }
}

testPasswordHashing();