const express = require('express');
const authControllers = require('../controllers/authControllers');
const router = express.Router();
const validationMiddlewares = require("../middlewares/validationMiddlewares");

router.post("/register",validationMiddlewares.registerUserValidation,authControllers.registerUser);

router.post("/login",validationMiddlewares.loginUserValidation,authControllers.loginUser);

router.get("/logout", authControllers.logoutUser);

module.exports = router;