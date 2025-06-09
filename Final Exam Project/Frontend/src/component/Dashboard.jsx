import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);

  const [managers, setManagers] = useState([]);
  const [addManager, setAddManager] = useState({
    name: "",
    email: "",
    image: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      axios
        .get("http://localhost:3000/dashboard", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setDashboardData(response.data);
        })
        .catch((error) => {
          console.error("Dashboard fetch error:", error);
        });

      fetchManagers();
    }
  }, []);

  const fetchManagers = () => {
    axios
      .get("http://localhost:3000/managers/getmanagers")
      .then((response) => {
        setManagers(response.data);
      })
      .catch((error) => {
        console.error("Fetch managers error:", error);
      });
  };

  const handleChange = (e) => {
    setAddManager({ ...addManager, [e.target.name]: e.target.value });
  };

  const handleAddManager = () => {
    if (!addManager.name || !addManager.email) {
      alert("Name and Email are required!");
      return;
    }
    if (editIndex !== null) {
      axios
        .put(
          `http://localhost:3000/managers/updatemanager/${editIndex}`,
          addManager
        )
        .then((response) => {
          console.log("Manager updated:", response.data);
          fetchManagers();
        })
        .catch((error) => {
          console.error("Update manager error:", error);
        });
      setEditIndex(null);
    } else {
      axios
        .post("http://localhost:3000/managers/addmanager", addManager)
        .then((response) => {
          console.log("Manager added:", response.data);
          fetchManagers();
        })
        .catch((error) => {
          console.error("Add manager error:", error);
        });
    }
    setAddManager({ name: "", email: "", image: "" });
  };

  const handleEditManager = (id) => {
    setEditIndex(id);
    const managerToEdit = managers.find((manager) => manager._id === id);
    setAddManager({
      name: managerToEdit.name,
      email: managerToEdit.email,
      image: managerToEdit.image || "",
    });
  };

  const handleDeleteManager = (id) => {
    axios
      .delete(`http://localhost:3000/managers/deletemanager/${id}`)
      .then((response) => {
        console.log("Manager deleted:", response.data);
        fetchManagers();
      })
      .catch((error) => {
        console.error("Delete manager error:", error);
      });
  };

  return (
    <div className="container mt-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center bg-dark text-white p-3 rounded">
        <h4 className="mb-0">Hi, {dashboardData?.user?.name} 👋</h4>
        <h5 className="text-warning mb-0">Welcome to the Dashboard</h5>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>

      {/* Add / Update Manager Section */}
      <div className="mt-5 bg-light p-4 rounded shadow-sm">
        <h5 className="mb-3">
          {editIndex !== null ? "Update Manager" : "Add Manager"}
        </h5>
        <div className="row g-3 align-items-end">
          <div className="col-md-4">
            <label className="form-label">
              Manager Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter manager name"
              name="name"
              value={addManager.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">
              Manager Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter manager email"
              name="email"
              value={addManager.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="Image URL"
              name="image"
              value={addManager.image || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 text-end">
            <button
              className={`btn ${
                editIndex !== null ? "btn-warning" : "btn-primary"
              }`}
              onClick={handleAddManager}
            >
              {editIndex !== null ? "Update Manager" : "Add Manager"}
            </button>
          </div>
        </div>
      </div>

      {/* Manager List Section */}
      <div className="mt-5">
        <h5 className="mb-3">Manager List</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th style={{ width: "5%" }}>No.</th>
                <th style={{ width: "25%" }}>Name</th>
                <th style={{ width: "25%" }}>Email</th>
                <th style={{ width: "25%" }}>Image</th>
                <th style={{ width: "20%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {managers.length > 0 ? (
                managers.map((manager, index) => (
                  <tr key={manager._id}>
                    <td>{index + 1}</td>
                    <td>{manager.name}</td>
                    <td>{manager.email}</td>
                    <td>
                      {manager.image ? (
                        <img
                          src={manager.image}
                          alt={manager.name}
                          width="60"
                          height="60"
                          style={{ objectFit: "cover", borderRadius: "8px" }}
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/60?text=No+Image";
                          }}
                        />
                      ) : (
                        <span>No Image</span>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-info me-2"
                        onClick={() => handleEditManager(manager._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteManager(manager._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No managers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
