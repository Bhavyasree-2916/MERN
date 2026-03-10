const express = require("express");
const router = express.Router();

const { createTask,getAllTask,getTaskById,updateTask,deleteTask } = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");

// Protect routes
router.use(protect);

// Create task
router.post("/create",protect,createTask);
router.get("/getTask",protect,getAllTask)
router.get("/getTask/:id",protect,getTaskById)
router.put("/updateTask/:id",protect,updateTask)
router.delete("/deleteTask/:id",protect,deleteTask)
module.exports = router;