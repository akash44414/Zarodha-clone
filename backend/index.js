const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');   
const bodyParser = require('body-parser');
const cors = require('cors');

const HoldingsModels=require('./model/HoldingsModels');
const PositionsModels=require('./model/PositionsModels');
const OrdersModels=require('./model/OrdersModels')

const app = express();  

app.use(cors());
app.use(bodyParser.json());

 const port = process.env.PORT || 3002;
 const uri = process.env.MONGO_URL;


 // create the route
 app.get("/addHoldings", async (req, res) => {
  let data=[
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
    {
      name: "HINDUNILVR",
      qty: 1,
      avg: 2335.85,
      price: 2417.4,
      net: "+3.49%",
      day: "+0.21%",
    },
    {
      name: "INFY",
      qty: 1,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
      isLoss: true,
    },
    {
      name: "ITC",
      qty: 5,
      avg: 202.0,
      price: 207.9,
      net: "+2.92%",
      day: "+0.80%",
    },
    {
      name: "KPITTECH",
      qty: 5,
      avg: 250.3,
      price: 266.45,
      net: "+6.45%",
      day: "+3.54%",
    },
    {
      name: "M&M",
      qty: 2,
      avg: 809.9,
      price: 779.8,
      net: "-3.72%",
      day: "-0.01%",
      isLoss: true,
    },
    {
      name: "RELIANCE",
      qty: 1,
      avg: 2193.7,
      price: 2112.4,
      net: "-3.71%",
      day: "+1.44%",
    },
    {
      name: "SBIN",
      qty: 4,
      avg: 324.35,
      price: 430.2,
      net: "+32.63%",
      day: "-0.34%",
      isLoss: true,
    },
    {
      name: "SGBMAY29",
      qty: 2,
      avg: 4727.0,
      price: 4719.0,
      net: "-0.17%",
      day: "+0.15%",
    },
    {
      name: "TATAPOWER",
      qty: 5,
      avg: 104.2,
      price: 124.15,
      net: "+19.15%",
      day: "-0.24%",
      isLoss: true,
    },
    {
      name: "TCS",
      qty: 1,
      avg: 3041.7,
      price: 3194.8,
      net: "+5.03%",
      day: "-0.25%",
      isLoss: true,
    },
    {
      name: "WIPRO",
      qty: 4,
      avg: 489.3,
      price: 577.75,
      net: "+18.08%",
      day: "+0.32%",
    },
  ];
  

  try {
    for (const item of data) {
      let newHolding = new HoldingsModels({
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
      });
      await newHolding.save(); // Await works properly here
    }
    res.send("Data saved successfully");
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).send("Error saving data");
  }
});

// create positions route

app.get("/positions",async(req,res)=>
{
  let positionsData=[
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  
  try {
    for (const item of positionsData) {
      let newPosition = new PositionsModels({
        product:item.product,
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
        isLoss:item.isLoss
      });
      await newPosition.save(); // Await works properly here
    }
    res.send("Data saved successfully");
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).send("Error saving data");
  }
})



// lets get the data from data base

app.get("/allHoldings",async (req,res)=>
{
    let gatdata=await HoldingsModels.find({});
    res.json(gatdata);
    console.log("hello akash");
})

app.get("/allPosition",async (req,res)=>
  {
      let gatdata=await PositionsModels.find({});
      res.json(gatdata);
      console.log("hello akash");
  })
    

  app.post('/newOrder',(req,res)=>{
    let newOrder=new OrdersModels({
      name: req.body.name,
      qty:req.body.qty,
      price:req.body.price,
      mode:req.body.mode,

    });

    newOrder.save();
      res.send("order sends");
  }
  )

app.listen(port, () => {
  console.log('Server is running on port 3002',`localhost:${3002}`);
  mongoose.connect(uri)
  .then(()=>{
    console.log("mongo connected");
  })
  .catch((e)=>
{
    console.log("error:",e)
})
});


