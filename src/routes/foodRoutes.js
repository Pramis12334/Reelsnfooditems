const express = require('express');
const router = express.Router();
const foodControllers = require("../controllers/foodControllers");
const multer = require('multer');
const authMiddlewares = require("../middlewares/authMiddlewares");
const validationMiddlewares = require('../middlewares/validationMiddlewares');

const upload = multer({ 
storage: multer.memoryStorage() 
});

router.post('/',authMiddlewares.foodPartnerMiddlewares,validationMiddlewares.createFoodValidation,upload.single("video"),foodControllers.createFoodItems);

module.exports = router;