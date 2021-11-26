const db = require("../../database/models");
const productModel = db.Product;
const categorieModel = db.Categorie;

const productService = {
    async createProduct(name, preco, preco_desc, cate_id){
        try {
            let product = await productModel.create({
                name, preco, preco_desc, cate_id
            });
            return product;
        } catch (error) {
            console.error(error);
            return undefined
        }
    },
    async getProducts(){
        try {
            let products = await productModel.findAll();
            return products;
        } catch (error) {
            console.error(error);
            return undefined
        }
    },

    async getCategories(){
        try {
            let categories = await categorieModel.findAll();
            return categories;
        } catch (error) {
            console.error(error);
            return undefined
        }
    },
}

module.exports = productService;