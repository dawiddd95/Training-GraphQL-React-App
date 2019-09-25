'use strict';
module.exports = (sequelize, DataTypes) => {
  const Travel = sequelize.define('Travel', {
    name: DataTypes.STRING,
    days: DataTypes.INTEGER,
    type: DataTypes.STRING,
    start: DataTypes.STRING,
    agencyId: DataTypes.INTEGER
  }, {});
  Travel.associate = function(models) {
    // associations can be defined here
  };
  return Travel;
};