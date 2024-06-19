const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function generateToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
}

module.exports = {
  generateToken,
};
