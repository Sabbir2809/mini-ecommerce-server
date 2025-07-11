const { Router } = require("express");
const orderRoute = Router();
const { placeOrder } = require("../controllers/orderController");

orderRoute.post("/", placeOrder);

module.exports = orderRoute;
