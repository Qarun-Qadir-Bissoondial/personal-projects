'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    uuid: {type: DataTypes.UUID, primaryKey: true, defaultValue: sequelize.Sequelize.UUIDV4}
  }, {});
  User.associate = function(models) {
    User.hasMany(models.List, { foreignKey: 'userId' })
  };
  return User;
};