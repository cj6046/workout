// requirements (express)
const express = require("express");
const workoutModel = require("../models/workoutModel");

// create instance of Router()
const router = express.Router();

/*** REQUEST HANDLERS ***/
// Get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

// Get individual workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get single workout" });
});

// Create a new workout
router.post("/", async (req, res) => {
  // Define vars for incoming body
  const { title, reps, load } = req.body;

  // Try/Catch T: Create document based on workoutModel
  try {
    const workout = await workoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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
