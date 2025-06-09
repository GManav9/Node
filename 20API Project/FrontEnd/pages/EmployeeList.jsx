import React, { useEffect, useState } from "react";
import axios from "axios";

function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch all employees from backend
    axios
      .get("http://localhost:8888/all-employees")
      .then((res) => {
        if (res.data.success) {
          setEmployees(res.data.employees);
          setError("");
        } else {
          setError(res.data.msg || "Failed to fetch employees");
        }
      })
      .catch(() => setError("Error fetching employees"));
  }, []);

  if (error) {
    return (
      <div className="container mt-5">
        <h3 className="text-danger">{error}</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>All Employees</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Manager ID</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id}>
                <td>{emp.username}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.managerId}</td>
                <td>
                  {emp.image ? (
                    <img
                      src={emp.image}
                      alt={emp.username}
                      width="50"
                      height="50"
                    />
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeesList;
