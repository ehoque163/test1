var jwt = require("jsonwebtoken");
var userRepo = require("../repositories/genericRepositories");

module.exports.authenticateRequest = () => {
  return function (req, res, next) {
    try {
      if (req.headers.authorization) {
        var accessToken = req.headers.authorization.split(" ")[1];
        jwt.verify(
          accessToken,
          process.env.PASSWORD_SALT,
          async (err, decodedToken) => {
            if (err) {
              return res.status(406).json({
                status: 406,
                message: "Token expired",
              });
            } else {
              let id = decodedToken.id;
              let data_check = await userRepo.findOneData({ where: { id: id } });
              if (!data_check) {
                return res
                  .status(500)
                  .json({ status: 500, message: "Invalid Account" });
              }
              req.credentials = { id: id, name: data_check.userName };
              next();
            }
          }
        );
      } else {
        return res.status(401).json({
          status: 401,
          message: "Auth required",
        });
      }
    } catch (e) {
      console.log("Middleware Error : ", e);
      return res.status(500).json({
        status: 500,
        message: "Middleware error",
      });
    }
  };
};
