const commentModel = require("../models/commentModel");

module.exports.list = function list(request, response) {
  commentModel.find({}).exec()
 .then(comment => {
   response.json(comment);
 });
};

module.exports.show = function show(request, response) {
  commentModel.findById(request.params.id).exec()
  .then(comment => {
    response.json(comment);
  });
};
 
module.exports.create = function create(request, response) {
  const newComment = new commentModel(request.body);
  newComment.save()
  .then(savedComment => {
    response.json(savedComment);
  });
 
};