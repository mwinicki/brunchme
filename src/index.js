let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require ("mongoose");
let restaurants = require ('./models/restaurantModel');
let restaurantRoutes = require ("./routes/RestaurantRoutes");
let commentRoutes = require ("./routes/commentRoutes");
const app = express();
const path = require('path');

    
mongoose.connect("mongodb://user1:iamuser1@ds137812.mlab.com:37812/brunchme");

app.use(express.static(path.join(__dirname, '../client')));
console.log(path.join(__dirname, '../client'));
app.use(bodyParser.json());
app.use(restaurantRoutes);
app.use(commentRoutes);



app.listen(5000, (err) => {
  if (err) {
     return console.log("Error", err);
};
});
console.log("The app is working");


