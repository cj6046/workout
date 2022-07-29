import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useState } from "react";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    // e.preventDefault();

    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log(error);
    }

    setError(null);
    console.log("workout deleted");
    console.log(json);
    dispatch({ type: "DELETE_WORKOUT", payload: json });
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (lbs.): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span
        onClick={() => {
          handleDelete();
        }}
      >
        Delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
