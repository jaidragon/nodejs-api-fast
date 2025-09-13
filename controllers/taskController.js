const Task = require('../models/Task');

const taskController = {};

taskController.createTask = async (req, res) => {
    try {
        const { task, isComplete } = req.body;
        const newTask = new Task({ task, isComplete });
        await newTask.save();
        res.status(200).json( {status: "ok", data: newTask} );
    } catch (error) {
        res.status(400).json({ status: "fail",  message: error.message });
    }
};

taskController.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json({ status: "ok", data: tasks });

    } catch (error) {   
        return res.status(400).json({ status: "fail", message: error.message });
    }
};

module.exports = taskController;