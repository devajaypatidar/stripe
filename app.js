const express = require("express");
const paymentRoutes = require("./routes/payment.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api", paymentRoutes);

module.exports = app;
