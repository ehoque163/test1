const sequelize = require("../config/db-connection").sequelize;
const DataTypes = require("sequelize/lib/data-types");
const users = require("../models/users")(sequelize, DataTypes);
const { Op } = require("sequelize");


module.exports.fetchQueryData = function (data) {
  return new Promise(function (resolve, reject) {
    if (data.where) {
      sequelize
        .model(data.table)
        .findAndCountAll({
          logging:false,
          where: data.where,
          include: data.include,
          attributes: data.attributes,
          // order: data.order,
          // limit: data.limit,
          // offset: data.offset,
        })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    } else {
      sequelize
        .model(data.table)
        .findAndCountAll()
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    }
  });
};

module.exports.findOneData = function (data) {
  return new Promise(function (resolve, reject) {
    users.findOne({ where: data.where, 
      attributes: data.attributes })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

module.exports.createData = function (data) {
  return new Promise(function (resolve, reject) {
    sequelize
      .model(data.table)
      .create(data.data, { transaction: data.transaction })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

