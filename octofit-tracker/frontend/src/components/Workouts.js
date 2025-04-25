import React, { useEffect, useState } from "react";

const API_URL = "https://stunning-adventure-7vwpx5x567g53g9-8000.app.github.dev/api/workouts/";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setWorkouts(data))
      .catch(() => setWorkouts([]));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Workouts</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(workouts) && workouts.length > 0 ? (
              workouts.map((workout) => (
                <tr key={workout.id || workout._id}>
                  <td>{workout.name}</td>
                  <td>{workout.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No workouts found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts;
