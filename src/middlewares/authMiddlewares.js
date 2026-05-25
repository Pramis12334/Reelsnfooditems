const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require('../models/userModel');

async function userMiddlewares(req, res) {
    const token = req.cookies.token;

    if(!token) {
        return res.status(400).json({ message: "You need to login first"});
    }

    try{
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if(!user) {
        return res.status(400).json({ message: "Forbidden"});
    }

    req.user = user;

    next();

    } catch(error) {
        return res.status(400).json({message: "Internal server error"})
    }
    

}

module.exports = { userMiddlewares };