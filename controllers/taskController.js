const Task = require('../models/Task');

const taskController = {};

/** 
{
   http://localhost:5000/api/tasks/  POST
   http://localhost:5000/api/tasks/68c58518d523cdc56f2aeb3d Put, Delete, 
   http://localhost:5000/api/tasks/68c58518d523cdc56f2aeb3d Get

  "task": "third-2 data",
  "isComplete": false
}
*/


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

taskController.getTaskbyId = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        if (!task) {
            throw new Error("Task not found");
        }
        return res.status(200).json({ status: "ok", data: task });
    } catch (error) {   
        return res.status(400).json({ status: "fail", message: error.message });
    }
}

taskController.updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const { task, isComplete } = req.body;

        const taskDB = await Task.findById(id);
        if (!taskDB) {
            throw new Error("Task not found");
        }
        taskDB.task = task;
        taskDB.isComplete = isComplete;
        await taskDB.save();
        return res.status(200).json({ status: "ok", data: taskDB });

    } catch (error) {   
        return res.status(400).json({ status: "fail", message: error.message });
    }
};

taskController.deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        await Task.findByIdAndDelete(id);

        return res.status(200).json({ status: "ok", message: "Task deleted"});

    } catch (error) {   
        return res.status(400).json({ status: "fail", message: error.message });
    }
};

module.exports = taskController;