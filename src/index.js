let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require ("mongoose");
let restaurants = require ('./models/restaurantModel');
let restaurantRoutes = require ("./routes/restaurantRoutes");
let commentRoutes = require ("./routes/commentRoutes");
const app = express();

    
mongoose.connect("mongodb://user1:iamuser1@ds137812.mlab.com:37812/brunchme");


app.use(bodyParser.json());
app.use(restaurantRoutes);
app.use(commentRoutes);



app.listen(3001, (err) => {
  if (err) {
     return console.log("Error", err);
};
});
console.log("The app is working");


