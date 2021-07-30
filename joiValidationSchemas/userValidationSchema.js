const Joi = require("@hapi/joi");

const userSchema = {};


// Login Schema
userSchema.userLogin = Joi.object().keys({
  userID: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = userSchema;
