const restaurantModel = require("../models/restaurantModel");

module.exports.list = function list(request, response) {

  restaurantModel.find({}).exec()
 .then(restaurant => {
   response.json(restaurant);
 });
};

module.exports.show = function show(request, response) {
  restaurantModel.findById(request.params.id).exec()
  .then(restaurant => {
    response.json(restaurant);
  });
};

module.exports.create = function create(request, response) {
    const newRestaurant = new restaurantModel(request.body);
    newRestaurant.save()
    .then(savedRestaurant => {
      response.json(savedRestaurant);
    });
};
   
  