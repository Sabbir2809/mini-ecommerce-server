const express = require("express");
const productRoute = require("./productRoutes");
const orderRoute = require("./orderRoutes");

const globalRouter = express.Router();

const moduleRoutes = [
  {
    path: "/products",
    route: productRoute,
  },
  {
    path: "/orders",
    route: orderRoute,
  },
];

moduleRoutes.forEach((route) => globalRouter.use(route.path, route.route));

module.exports = globalRouter;
