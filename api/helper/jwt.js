const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY

function verifyToken(access_token){
    return jwt.verify(access_token, JWT_KEY)
}

module.exports = verifyToken