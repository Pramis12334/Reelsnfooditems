const userModel = require('../models/userModel');
const userService = require('../service/userService');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
const { username, email, password} = req.body;
 const user= await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    });
    if(user) {
        return res.status(400).json({ Message: "User already existed:" });
    }

try{

    const hashedPassword = await userService.hashingPassword(password);
    const user = new userModel({
        username,
        email,
        password: hashedPassword
    });
    await user.save();
    const token =  await userService.createuserToken(user);
    res.cookie("token", token);
    res.status(201).json({ message: "User created successfully:", token: token});
    
} catch (error) {
    return res.status(400).json({ error: error.Message });
}}

module.exports = { registerUser };