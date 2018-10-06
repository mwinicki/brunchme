let mongoose = require("mongoose");

const schema = new mongoose.Schema({
 address: {
   required: true,
   type: String
 },
 addressLocality: {
   required: true,
   type: String
 },
 postalCode: {
   required: true,
   type: String
 }
});

module.exports =  mongoose.model("restaurants", schema);
