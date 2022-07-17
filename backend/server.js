// requirements
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const workoutRouter = require("./routers/workoutRouter");

// express app
const app = express();

// // middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

app.use("/api/workouts", workoutRouter);

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((e) => {
    console.log(e);
  });
