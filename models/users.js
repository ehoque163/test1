"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "users",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userName: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      userDesc:  DataTypes.STRING, 
      password: DataTypes.STRING,
      regTime: DataTypes.DATE,
    },
    {
      timestamps: true,
    }
  );
  return user;
};
