const Joi = require("@hapi/joi");

module.exports.validate = (schema, property) => {
  return (req, res, next) => {
    console.log(req.body);
    const { error } = schema.validate(req[property]);
    if (error == undefined) {
      next();
    } else {
      const message = error.details.map((i) => i.message).join(",");
      res.status(422).json({
        status: 422,
        message: message.replace(/[\\"]/g, ""),
        data: [],
        purpose: "Validation Error",
      });
    }
  };
};

