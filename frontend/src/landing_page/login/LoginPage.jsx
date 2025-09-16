import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://stock-verge-backend.onrender.com/auth/login", {
        username,
        password,
      });

      login(res.data.token); // update context
      alert(`Welcome, ${username}!`);
      navigate("/"); // go to homepage
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow p-4 col-9 col-md-8 col-lg-6" style={{ borderRadius: "10px" }}>
        <h2 className="text-center mb-4">Login</h2>

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
          onClick={handleLogin}
        >
          Login
        </button>

        <button
          className="btn btn-outline-secondary w-100"
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Register
        </button>
      </div>
    </div>
  );
};

export default Login;