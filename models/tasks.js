const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  task_name: {
    type: String,
    required: [true, "Must Provide a Task"],
    maxlength: 30,
    trim: true,
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
