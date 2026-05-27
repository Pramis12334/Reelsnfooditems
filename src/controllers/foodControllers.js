const fooditemsModel = require("../models/foodModel");
const foodpartnerModel = require('../models/foodpartnerModel');
const jwt = require('jsonwebtoken');
const storageService = require('../service/storage.service');
const { v4: uuid } = require('uuid');


async function createFoodItems(req, res){
    
    try{
    const { name, description } = req.body;
    const file = req.file;
    const foodpartner = req.foodpartner;
    
    const result = await storageService.videoUpload(file.buffer.toString('base64'),uuid());
    const fooditems = await fooditemsModel.create({
        name,
        description,
        video: result.url,
        foodpartner: foodpartner._id
    });
    await fooditems.save();
    return res.status(201).json({ message:  "Fooditems created successfully "});
    } catch(err) {
        return res.status(400).json({ err: err.array()});
    }
};

async function getFoodItems(req, res) {
    try{

    const user = req.user;

    const fooditems = await fooditemsModel.find({});

    res.status(200).json({ message: "Fetch successfully", fooditems: fooditems});

    } catch(err) {
        return res.status(400).json({ err: err.array()});
    }
};

module.exports = { createFoodItems, getFoodItems };