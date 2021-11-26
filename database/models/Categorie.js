'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Categorie extends Model {
		static associate(models) {
		}
	};
	Categorie.init({
		descricao: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		perc_desc: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
	}, {
		sequelize,
		modelName: 'Categorie',
		tableName: 'categories'
	});
	return Categorie;
};