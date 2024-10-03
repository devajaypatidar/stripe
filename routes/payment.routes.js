const express = require("express");
const {
  createPayment,
  getPayment,
} = require("../controllers/payment.controller");
const router = express.Router();

router.post("/payment/create", createPayment);
router.get("/payment/:id", getPayment);

module.exports = router;
