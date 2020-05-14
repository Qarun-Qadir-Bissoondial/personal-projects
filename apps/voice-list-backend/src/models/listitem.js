'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListItem = sequelize.define('ListItem', {
    uuid: { type: DataTypes.UUID, primaryKey: true },
    itemname: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {});
  ListItem.associate = function(models) {
    ListItem.belongsTo(models.List)
  };
  return ListItem;
};