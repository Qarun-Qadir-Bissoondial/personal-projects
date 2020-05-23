'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ListItems', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        unique: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      itemname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      completed: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      listId: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: 'Lists',
          key: 'uuid'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("(now() at time zone 'utc')")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("(now() at time zone 'utc')")
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ListItems');
  }
};