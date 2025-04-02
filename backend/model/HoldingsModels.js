// const {model} = require('mongoose');

// const {HoldingsSchema}=require("../schemas/HoldingsSchema")

// const HoldingsModels = new model("holding",HoldingsSchema);
    
// module.exports={HoldingsModels};

// filepath: ./model/HoldingsModels.js
const mongoose = require('mongoose');

const HoldingsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number, required: true },
  price: { type: Number, required: true },
  net: { type: String, required: true },
  day: { type: String, required: true },
  isLoss: { type: Boolean, default: false },
});

module.exports = mongoose.model('Holdings', HoldingsSchema);