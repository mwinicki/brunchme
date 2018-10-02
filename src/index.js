let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require ("mongoose");

const app = express();

    
mongoose.connect("mongodb://user1:iamuser1@ds137812.mlab.com:37812/brunchme")
    //  .then(function (data) { return data.json();})
    //  .then(function(data) {
    //    console.log(data);

app.use(bodyParser.json());

app.get('/restaurant/:id', (request,response,next) => {
    return response.json({})
});

app.listen(3001, (err) => {
  if (err) {
     return console.log("Error", err);
}
console.log("Web server is now living in apartment 3002");
});

            