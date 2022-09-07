const express = require("express");
const db = require("./database");
const ordersModel = require("./database/models/orders.js")
const cors = require("cors");

var app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));
db.init();

app.post('/getOrders', (req, res) => {
  var mob = req.body.mobile;
  ordersModel.find({orderedBy: mob, eligible: true})
  .then(function(data){
    if(data){
      console.log(data);
      res.end(JSON.stringify(data));
    }
  })
  .catch(function(err){
    console.log(err);
    res.end(JSON.stringify(err));
  })
});

app.post("/postOrders", (req, res)=>{

  const data =[
  {
    orderedBy: [9309982738, 9309520633, 9146076230],
    name: "Wafers",
    eligible: true
  },
  {
    orderedBy: [9309982738, 9146076230],
    name: "Tea Powder",
    eligible: true
  },
  {
    orderedBy: [9309982738, 9309520633],
    name: "Milk",
    eligible: true
  },
  {
    orderedBy: [9309982738, 9146076230],
    name: "Perk",
    eligible: false
  }]


  data.forEach(function(value){
    ordersModel.create(value)
    .then(function(data){
      console.log(data);
    })
    .catch(function(err){
      console.log(err);
    })
  });
});

app.listen(8000, function(){
	console.log("server running at port http://localhost:8000");
})