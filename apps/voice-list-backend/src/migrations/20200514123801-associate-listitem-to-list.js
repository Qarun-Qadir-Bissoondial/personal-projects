'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'ListItems',
      'ListId',
      {
        type: Sequelize.UUID,
        references: {
          model: 'Lists',
          key: 'uuid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'ListItems',
      'ListId'
    )
  }
};
