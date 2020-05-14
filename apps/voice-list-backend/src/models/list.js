'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    listname: DataTypes.STRING,
    completed: DataTypes.INTEGER,
    pending: DataTypes.INTEGER,
    uuid: {type: DataTypes.UUID, primaryKey: true }
  }, {});
  List.associate = function(models) {
    List.belongsTo(models.User)
    // associations can be defined here
  };
  return List;
};