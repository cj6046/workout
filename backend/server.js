// requirements
const express = require("express");
const workoutRouter = require("./routers/workouts");

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

// listen for requests
app.listen(4000, () => {
  console.log("listening on port 4000");
});
