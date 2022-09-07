const mongoose = require("mongoose")


const ordersSchema = new mongoose.Schema({
  orderedBy: [{
    type: String,
    required: true,
  }],
  name: {
      type: String,
      required: true,
  },
  eligible: {
    type: Boolean,
    default: false,
  }
},
{ timestamps: true }
);

const ordersModel = mongoose.model('orders', ordersSchema);

module.exports = ordersModel;