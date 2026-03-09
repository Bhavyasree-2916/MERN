const express = require("express");
const router = express.Router();

const { createTask } = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");

// Protect routes
router.use(protect);

// Create task
router.post("/create", createTask);

module.exports = router;