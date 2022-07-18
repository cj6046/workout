// requirements (express)
const express = require("express");
const {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
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
router.patch("/:id", updateWorkout);

// Delete a workout
router.delete("/:id", deleteWorkout);

// export router module
module.exports = router;
