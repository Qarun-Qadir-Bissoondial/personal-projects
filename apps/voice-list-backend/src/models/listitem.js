'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListItem = sequelize.define('ListItem', {
    uuid: { type: DataTypes.UUID, primaryKey: true },
    itemname: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    listId: DataTypes.UUID
  }, {});
  ListItem.associate = function(models) {
    ListItem.belongsTo(models.ListItem, { foreignKey: 'uuid', target_key: 'listId' })
  };
  return ListItem;
};