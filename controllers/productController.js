const Product = require("../models/Product");
const { successResponse, errorResponse } = require("../utils/response");

exports.getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const total = await Product.countDocuments();

    const meta = {
      limit,
      page,
      total,
    };

    const products = await Product.find().skip(skip).limit(limit);

    return successResponse(
      res,
      200,
      "Products fetched successfully",
      meta,
      products
    );
  } catch (err) {
    return errorResponse(res, 500, "Failed to fetch products");
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    return successResponse(res, 200, "Product details fetched", null, product);
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return successResponse(res, product, "Product created successfully");
  } catch (err) {
    return errorResponse(res, 400, "Product creation failed");
  }
};
