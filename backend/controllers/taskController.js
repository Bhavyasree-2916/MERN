const Task = require("../models/Task");

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      user: req.user.id
    });

    res.status(201).json({
      msg: "task created",
      task: task
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Get all tasks
exports.getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });

    res.json(tasks);

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.id
    })
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
      },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json(task);

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    })
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    res.json({ msg: "Task deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
}