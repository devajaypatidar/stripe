const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Payment = require("../models/payments.model");

exports.createPayment = async (req, res) => {
  const { amount, currency, source, description } = req.body;

  try {
    if (!amount || !currency || !source) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const charge = await stripe.charges.create({
      amount,
      currency,
      source,
      description,
    });

    const { id: paymentId, status } = charge;

    await Payment.create({
      paymentId,
      amount,
      currency,
      status,
      description,
    });

    res.status(200).json({ paymentId, status });
  } catch (err) {
    console.error("Charge creation error:", err);
    if (err.type === "StripeCardError") {
      return res.status(400).json({ error: "Card declined." });
    } else if (err.type === "StripeInvalidRequestError") {
      return res.status(400).json({ error: "Invalid parameters provided." });
    } else {
      return res
        .status(500)
        .json({ error: "An error occurred during payment processing." });
    }
  }
};

exports.getPayment = async (req, res) => {
  const { id } = req.params;

  try {
    const payment = await Payment.findByPk(id);
    if (!payment) {
      return res.status(404).json({ error: "Payment not found." });
    }

    res.status(200).json(payment);
  } catch (err) {
    console.error("Database retrieval error:", err);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving payment details." });
  }
};
