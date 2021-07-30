const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const genericRepositories = require("../repositories/genericRepositories");

module.exports.login = (req, res) => {
  (async () => {
    try {
        var credentials = {
          where: {
            email: req.body.userID,
          },
        };
      const fetchData = await genericRepositories.findOneData(credentials);
      console.log(fetchData)
      if (fetchData) {
        const result = bcrypt.compareSync(
          md5(req.body.password),
          fetchData.password
        );
        if (result) {
          const refreshToken = jwt.sign(
            {
              email: fetchData.email,
              regTime: fetchData.regTime,
            },
            process.env.PASSWORD_SALT
          );
          const accessToken = jwt.sign(
            {
              refreshToken: refreshToken,
              email: fetchData.email,
              id: fetchData.id,
              userNmae: fetchData.userName,
              regTime: fetchData.regTime
            },
            process.env.PASSWORD_SALT,
            { expiresIn: '5m'}
          );
          const resData = {
            refreshToken: refreshToken,
            accessToken: accessToken,
          };
          return res.status(200).json({
            data: {
              name: fetchData.fullname,
              token: resData,
            },
            message: "user Successfully login",
            status: 200,
          });
        } else {
          return res.status(401).json({
            data: [],
            message: "username or password did not match",
            status: 401,
          });
        }
      } else {
        return res.status(401).json({
          data: [],
          message: "user not found",
          status: 401,
        });
      }
    } catch (error) {
      console.log("error occured", error);
    }
  })();
};

module.exports.fetchDetails = (req, res) => {
  (async () => {
    try {
      let id = req.credentials.id;
      let data = {
        where: {
          id: id,
        },
        attributes:{
          exclude: ['password','createdAt','updatedAt']
        },
      };
    const fetchData = await genericRepositories.findOneData(data);
      return res.status(200).send({
        status: 200,
        message: "Detail fetched successfully",
        data: fetchData,
        info: { description: "this api is for fetching user's information" },
      });
    } catch (error) {
      console.log(error)
      return res.status(500).send({
        status: 500,
        message: "error fetching details",
        info: { description: "this api is for fetching user's information" },
        error
      });
    }
  }
  )()
}
