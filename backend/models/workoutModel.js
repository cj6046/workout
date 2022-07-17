/*
 * This represents a workout object structurally, defining the Schema and then * exporting a model based off that Schema. MongoDB pluralizes the model name * to create a collection which can then utilize CRUD operations
 */

// Requirements
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

models.exports = mongoose.model("workout", workoutSchema);
