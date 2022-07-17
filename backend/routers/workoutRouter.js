// requirements (express)
const express = require("express");
const {
  getAllWorkouts,
  getWorkout,
  createWorkout,
} = require("../controllers/workoutController");

// create instance of Router()
const router = express.Router();

/*** REQUEST HANDLERS ***/
// Get all workouts
router.get("/", getAllWorkouts);

// Get individual workout
router.get("/:id", getWorkout);

// Create a new workout
router.post("/", createWorkout);

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
