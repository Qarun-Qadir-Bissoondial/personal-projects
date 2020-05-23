'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lists', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      listname: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      completed: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pending: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: 'Users',
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
    return queryInterface.dropTable('Lists');
  }
};