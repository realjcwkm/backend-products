'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		static associate(models) {
			this.belongsTo(models.Categorie, {
				foreignKey: 'cate_id',
				targetKey: 'id',
			});
		}
	};
	Product.init({
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		preco: {
			type: DataTypes.DECIMAL(10,2),
			allowNull: false,
		},
		preco_desc: {
			type: DataTypes.DECIMAL(10,2),
			defaultValue: null,
		},
		cate_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}, {
		sequelize,
		modelName: 'Product',
		tableName: 'products'
	});
	return Product;
};