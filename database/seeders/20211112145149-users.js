'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('Users', [{
			username: 'John Doe222',
			password: 'dhasudhuasdas',
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			username: 'John Doe',
			password: 'dhasudhuasdas',
			created_at: new Date(),
			updated_at: new Date(),
		},
	], {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Users', null, {});
	}
};
