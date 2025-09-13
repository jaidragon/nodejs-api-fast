const express = require('express');
const { createTask, getTasks } = require('../controllers/taskController');

const router = express.Router();


router.get("/", getTasks);
router.post("/", createTask);
//router.put("/:id", );
//router.delete("/:id", );

module.exports = router;