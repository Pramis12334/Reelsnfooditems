const express = require('express');
const router = express.Router();
const foodControllers = require("../controllers/foodControllers");
const multer = require('multer');
const authMiddlewares = require("../middlewares/authMiddlewares");

const upload = multer({ 
storage: multer.memoryStorage() 
});

router.post('/',authMiddlewares.foodPartnerMiddlewares,upload.single("video"),foodControllers.createFoodItems);

router.get('/',authMiddlewares.userMiddlewares,foodControllers.getFoodItems);

module.exports = router;