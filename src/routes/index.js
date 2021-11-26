const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

const routes = require("express").Router();


routes.get("/user/:id", userController.getUser)
routes.get("/users", userController.getUsers);
routes.post("/user", userController.createUser);
routes.put("/user", userController.updateUser);
routes.delete("/user/:id", userController.deleteUser);

routes.post("/product", productController.createProduct);
routes.get("/products", productController.getProducts);

routes.get("/categories", productController.getCategories);

module.exports = routes;
