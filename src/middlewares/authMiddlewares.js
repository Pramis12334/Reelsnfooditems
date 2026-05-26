const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require('../models/userModel');
const foodpartnerModel = require('../models/foodpartnerModel');

async function userMiddlewares(req, res, next) {
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
async function foodPartnerMiddlewares(req, res, next) {
    const token = req.cookies.token;

    if(!token) {
        return res.status(400).json({ message: "You must logged in first" });
    }

    try{

        const ispartner = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const foodpartner = await foodpartnerModel.findOne({_id: ispartner.id});


        if(!foodpartner) {
            return res.status(400).json({ message: "Foodpartner doesnot exist"});
        }

        req.foodpartner = foodpartner;

        next();

    } catch(err) {
        return res.status(400).json({ err: err.Message });
    }
}

module.exports = { userMiddlewares, foodPartnerMiddlewares };