const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const globalRouter = require("./routes");

// init
dotenv.config();
connectDB();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1", globalRouter);

// health check
app.get("/", (req, res) => {
  res.send("Mini E-Commerce API is running...");
});

// error handle
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
