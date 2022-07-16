// requirements (express)
const express = require("express");

// create instance of Router()
const router = express.Router();

// REQUEST HANDLERS
// Get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

// Get individual workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get single workout" });
});

// Create a new workout
router.post("/create", (req, res) => {
  res.json({ mssg: "Create a workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout" });
});

// Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a workout" });
});

// export router module
module.exports = router;
