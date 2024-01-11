const express = require("express");
const { userController } = require("./controllers/userControllers");
const connectDatabase = require("./config/database");
const cors = require("cors");
const { StatusCodes } = require("http-status-codes");
const { v1 } = require("./router/v1.route");
const app = express();

connectDatabase();

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) =>
  res
    .status(StatusCodes.OK)
    .json({ message: "API is running successfully", status: StatusCodes.OK })
);
app.use('/api', v1)
// app.get("/api?search", userController.getUserBySearch);

module.exports = { app };
