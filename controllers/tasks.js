const Task = require("../models/tasks");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).send(err);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).send(err);
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id is ", id);
    const task = await Task.findOne({ _id: id });
    console.log("task is ", task);
    if (!task) {
      return res.status(404).json({ msg: `Not found id ${id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
  }
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
