'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('categories', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			descricao: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			perc_desc: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('categories');
	}
};