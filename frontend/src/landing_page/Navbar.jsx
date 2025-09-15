import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // import the context

function Navbar() {
  const { token, logout } = useContext(AuthContext); // get token & logout from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clears token from context & localStorage
    navigate("/login"); // redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logoStockVerge.svg"
            alt="Logo"
            style={{ width: "40%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Show Signup & Login only when NOT logged in */}
            {!token && (
              <>
                <li className="nav-item me-4">
                  <Link className="nav-link active" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}

            {/* Always visible links */}
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>

            {/* Show Dashboard & Logout only when logged in */}
            {token && (
              <>
                <li className="nav-item me-4">
                  <Link className="nav-link active" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <button
                    className="btn btn-outline-danger btn-sm mt-1"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
