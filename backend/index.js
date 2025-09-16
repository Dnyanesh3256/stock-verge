require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");

const { router: authRoutes, authMiddleware } = require("./auth");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/buyOrder", authMiddleware, async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("New order saved!");
});

app.post("/sellOrder", authMiddleware, async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: "SELL", // force mode to SELL
    });

    await newOrder.save();

    res.status(201).send("Sell order saved!");
  } catch (error) {
    console.error("Error saving sell order:", error);
    res.status(500).send("Failed to save sell order");
  }
});

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(url);
  console.log("DB connected!");
});
