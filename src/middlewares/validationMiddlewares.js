const { body, validationResult } = require('express-validator');

async function validateResult(req, res, next) {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    next();
}

const registerUserValidation = [
    body("username")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3, max: 20})
    .withMessage("Username must be between 3 and 20"),
    body("email")
    .isEmail()
    .withMessage("Email must be valid"),
    body("password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 character long"),
    validateResult
];

const registerFoodpartnerValidation = [
    body("username")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 3, max: 20})
    .withMessage("Username must be between 3 and 20"),
    body("email")
    .isEmail()
    .withMessage("Email must be valid"),
    body("password")
    .isLength({ min: 3})
    .withMessage("Password must be greater than 3 character"),
    validateResult
];

const createFoodValidation = [
    body("name")
    .isString()
    .withMessage("Name must be a String"),
    body("description")
    .isLength({max:200})
    .withMessage("Description cant be greater than 200 characters"),
    ,validateResult
]

module.exports = { registerUserValidation, registerFoodpartnerValidation, createFoodValidation };