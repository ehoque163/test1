const express = require("express");
const userRouter = express.Router();
const commonController = require("../controllers/commonController");
const validationMiddleware = require("../middleware/ValidateRequest");
const userValidationSchema = require("../joiValidationSchemas/userValidationSchema");
const authenticationMiddleware = require("../middleware/authentication");

userRouter.post("/user-login",validationMiddleware.validate(userValidationSchema.userLogin, "body"), commonController.login);
userRouter.get("/user-details",authenticationMiddleware.authenticateRequest(null), commonController.fetchDetails);
module.exports = userRouter;