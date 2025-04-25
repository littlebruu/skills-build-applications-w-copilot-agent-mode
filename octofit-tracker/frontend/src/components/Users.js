import React, { useEffect, useState } from "react";

const API_URL = "https://stunning-adventure-7vwpx5x567g53g9-8000.app.github.dev/api/users/";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setUsers([]));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Users</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id || user._id}>
                  <td>{user.name || user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.created_at ? new Date(user.created_at).toLocaleString() : ""}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
