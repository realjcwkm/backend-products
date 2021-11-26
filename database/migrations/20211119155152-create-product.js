'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('products', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			preco: {
				type: Sequelize.DECIMAL(10,2),
				allowNull: false,
			},
			preco_desc: {
				type: Sequelize.DECIMAL(10,2),
				defaultValue: null,
			},
			cate_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'categories',
					key: 'id',
				}
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('products');
	}
};