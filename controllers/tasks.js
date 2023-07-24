const Tasks = require("../models/tasks");

const getAllTasks = (req, res) => {
  res.send("<h1>Getting all Tasks</h1>");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
  res.send("<h1>Getting a Task</h1>");
};

const updateTask = (req, res) => {
  res.send("<h1>Update a Task</h1>");
};

const deleteTask = (req, res) => {
  res.send("<h1>Delete a Task</h1>");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
