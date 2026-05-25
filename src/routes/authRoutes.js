const express = require('express');
const authControllers = require('../controllers/authControllers');
const router = express.Router();
const validationMiddlewares = require("../middlewares/validationMiddlewares");

router.post("/user/register",validationMiddlewares.registerUserValidation,authControllers.registerUser);

router.post("/user/login",authControllers.loginUser);

router.get("/user/logout", authControllers.logoutUser);

router.post("/foodpartner/register",validationMiddlewares.registerFoodpartnerValidation,authControllers.registerFoodpartner);

router.post("/foodpartner/login",authControllers.loginFoodpartner);

router.get("/foodpartner/logout",authControllers.logoutFoodpartner);

module.exports = router;