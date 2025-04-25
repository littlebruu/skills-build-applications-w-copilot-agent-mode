import React, { useEffect, useState } from "react";

const API_URL = "https://stunning-adventure-7vwpx5x567g53g9-8000.app.github.dev/api/activities/";

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch(() => setActivities([]));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Activities</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Type</th>
              <th>Duration</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(activities) && activities.length > 0 ? (
              activities.map((activity) => (
                <tr key={activity.id || activity._id}>
                  <td>{activity.activity_type}</td>
                  <td>{activity.duration}</td>
                  <td>{activity.user?.name || activity.user?.username || activity.user}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No activities found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
