'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Lists',
      'UserId',
      {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'uuid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Lists',
      'UserId'
    )
  }
};
