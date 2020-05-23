'use strict';

module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    listname: DataTypes.STRING,
    completed: DataTypes.INTEGER,
    pending: DataTypes.INTEGER,
    uuid: {type: DataTypes.UUID, primaryKey: true },
    userId: { type: DataTypes.UUID }
  }, {});
  List.associate = function(models) {
    List.belongsTo(models.User, { foreignKey: 'uuid', target_key: 'userId' })
    List.hasMany(models.ListItem, { foreignKey: 'listId' })
  };
  return List;
};