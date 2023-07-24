const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  task_name: String,
  completed: Boolean,
});

module.exports = mongoose.Model("Task", taskSchema);
