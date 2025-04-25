import React, { useEffect, useState } from "react";

const API_URL = "https://stunning-adventure-7vwpx5x567g53g9-8000.app.github.dev/api/leaderboard/";

function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch(() => setEntries([]));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Leaderboard</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(entries) && entries.length > 0 ? (
              entries.map((entry) => (
                <tr key={entry.id || entry._id}>
                  <td>{entry.user?.name || entry.user?.username || entry.user}</td>
                  <td>{entry.score}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No leaderboard entries found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
