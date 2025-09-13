const express = require('express');
const { createTask, getTasks, updateTask, deleteTask, getTaskbyId } = require('../controllers/taskController');

const router = express.Router();


router.get("/", getTasks);
router.get("/:id", getTaskbyId);
router.post("/", createTask);
router.put("/:id", updateTask, );
router.delete("/:id", deleteTask);

module.exports = router;