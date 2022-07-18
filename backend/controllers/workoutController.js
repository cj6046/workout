const workoutModel = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await workoutModel.find({});
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get single workout
const getWorkout = async (req, res) => {
  try {
    // pass props from endpoint through the request
    const { id } = req.params;
    // check validity of id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid workout ID" });
    }
    // retrieve from mongoose with model based on prop
    const workout = await workoutModel.findById(id);
    // check valid workout
    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }
    // return json data
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create workout
const createWorkout = async (req, res) => {
  // Define vars for incoming body
  const { title, reps, load } = req.body;

  // Try/Catch T: Create document based on workoutModel
  try {
    const workout = await workoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  // check validity of id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid workout ID" });
  }

  const workout = await workoutModel.findByIdAndUpdate(id, { ...req.body });

  // check valid workout
  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }

  // Success
  res.status(200).json(workout);
};

// delete workout
const deleteWorkout = async (req, res) => {
  // pass the id prop
  const { id } = req.params;

  // check validity of id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid workout ID" });
  }

  // delete the workout from mongodb
  const workout = await workoutModel.findByIdAndDelete(id);

  // check valid workout
  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }

  // Success
  res.status(200).json(workout);
};

// export functions
module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
