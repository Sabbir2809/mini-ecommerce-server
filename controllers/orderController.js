const Order = require("../models/Order");
const { successResponse, errorResponse } = require("../utils/response");

exports.placeOrder = async (req, res) => {
  const { name, email, address } = req.body;

  if (!name || !email || !address) {
    return errorResponse(res, 400, "Name, email, and address are required");
  }

  try {
    const order = await Order.create({ name, email, address });

    return successResponse(res, 201, "Order placed successfully", null, order);
  } catch (error) {
    return errorResponse(res, 500, "Failed to place order");
  }
};
