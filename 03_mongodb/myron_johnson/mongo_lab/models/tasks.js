var task = {
  name: "My task",
  description: "This is something I need to do",
  completed: false
};

// require mongoose
var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: {type: Boolean, "default": false }
});

module.exports = mongoose.model('Task', TaskSchema);
