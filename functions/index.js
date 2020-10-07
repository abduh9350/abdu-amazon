const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HYmyaJAPXXZvRDajIBTeRvMWq2mr47e9ydvn8ciUA33UTNuayMLSICVXH251YT4ke0FR6UIZsoP4dG68Imfte6H00iPWKup7b"
);
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Received BOOM", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//http://localhost:5001/abdu-ee14b/us-central1/api
