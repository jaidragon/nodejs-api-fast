/**
 * 1. add to-do     post/tasks
 * 2. show to-dos   get/tasks
 * 3. update to-do  put/tasks/:id
 * 4. delete to-do  delete/tasks/:id
 */

const express = require('express');
const router = express.Router();
const taskApi = require("./task.api");

console.log("b4 task api");
router.use("/tasks", taskApi);
// router.use("/products", productApi);

module.exports = router;