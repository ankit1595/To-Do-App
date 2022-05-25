const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
});

const TaskDetails = mongoose.model("TaskDetails", taskSchema);

module.exports = TaskDetails;
