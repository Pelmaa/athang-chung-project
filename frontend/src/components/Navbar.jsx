import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          WatchBuddy
        </Link>

        <div className="navbar-links">
          <Link to="/about" className="nav-link">
            About
          </Link>

          {user ? (
            <>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
              <span className="nav-user">{user.name}</span>
              <button className="nav-button" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Sign In
              </Link>
              <Link to="/register" className="nav-link">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
