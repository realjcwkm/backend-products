const productService = require("../services/productService");

const productController = {
    async createProduct(req, res){
        const { name, preco, preco_desc, cate_id } = req.body;


        let product = await productService.createProduct(name, preco, preco_desc, cate_id);

        return res.json(product);
    },

    async getProducts(req, res){
        let products = await productService.getProducts();

        return res.json(products);
    },

    async getCategories(req, res){
        let categories = await productService.getCategories();

        return res.json(categories);
    }
}

module.exports = productController;