import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ⬅️ Add useNavigate
import { useAuth } from "../../context/AuthContext";
import { Menu, X } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  const { user, logout, isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // ⬅️ Init navigate

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout(); // Call logout
    closeMenu(); // Close mobile menu
    navigate("/"); // ⬅️ Redirect to home page
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <h1 className="navbar-title">WatchBuddy</h1>
        <p className="navbar-subtitle">Your personal movie companion</p>
      </Link>

      <button
        className="hamburger-btn"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {isLoggedIn && (
          <>
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
            <Link to="/profile" className="nav-link" onClick={closeMenu}>
              Profile
            </Link>
            <span className="nav-user">{user?.name || "MovieLover"}</span>
          </>
        )}
        {isLoggedIn ? (
          <button className="nav-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="nav-button" onClick={closeMenu}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
