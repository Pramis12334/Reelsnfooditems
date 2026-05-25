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

async function createfoodpartnerToken(foodpartner) {
    const token = jwt.sign({
        id: foodpartner._id,
        username: foodpartner.username,
        email: foodpartner.email
    }, process.env.JWT_SECRET_KEY);
    return token;
}

module.exports = {createuserToken, hashingPassword, createfoodpartnerToken};