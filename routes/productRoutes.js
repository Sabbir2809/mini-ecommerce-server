const { Router } = require("express");
const productRoute = Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
} = require("../controllers/productController");

productRoute.get("/", getAllProducts);
productRoute.get("/:id", getProductById);
productRoute.post("/", createProduct);

module.exports = productRoute;
