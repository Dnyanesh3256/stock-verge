import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("https://stock-verge-backend.onrender.com/auth/signup", { username, password });
      alert("User registered!");
      setUsername("");
      setPassword("");
    } catch (err) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow p-4 col-9 col-md-8 col-lg-6" style={{ borderRadius: "10px" }}>
        <h2 className="text-center mb-4">Register</h2>
        
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button
          className="btn btn-primary w-100 mb-3"
          onClick={handleRegister}
        >
          Register
        </button>

        <button
          className="btn btn-outline-secondary w-100"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default Register;