import React, { useEffect, useState } from "react";

const API_URL = "https://stunning-adventure-7vwpx5x567g53g9-8000.app.github.dev/api/teams/";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch(() => setTeams([]));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Teams</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(teams) && teams.length > 0 ? (
              teams.map((team) => (
                <tr key={team.id || team._id}>
                  <td>{team.name}</td>
                  <td>{team.members?.length || 0}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No teams found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
