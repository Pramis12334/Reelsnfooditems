const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function createuserToken(user){
    const token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email
    }, process.env.JWT_SECRET_KEY);
    return token;
}
async function hashingPassword(password) {
    const saltrounds = 10;
    const hashedPassword = bcrypt.hash(password, saltrounds);
    return hashedPassword;
}

module.exports = {createuserToken, hashingPassword};