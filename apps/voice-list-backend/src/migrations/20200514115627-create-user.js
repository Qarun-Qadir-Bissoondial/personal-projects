'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
      .then(() => {
        return queryInterface.createTable('Users', {
          uuid: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
            // defaultValue: Sequelize.literal('uuid_generate_v4()')
          },
          firstname: {
            type: Sequelize.STRING,
            allowNull: false
          },
          lastname: {
            type: Sequelize.STRING,
            allowNull: false
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false
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
        });
      })

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};