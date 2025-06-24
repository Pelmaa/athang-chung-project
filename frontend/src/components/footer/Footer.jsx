import { Link } from "react-router-dom";
import { Github, Twitter, Instagram, Mail } from "lucide-react";
import "./Footer.css";
import { useAuth } from "../../context/AuthContext";

const Footer = () => {
  const { isLoggedIn } = useAuth();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer" aria-label="Site footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">WatchBuddy</h3>
          <p className="footer-description">
            Your ultimate movie tracking companion. Organize, rate, and never
            forget what to watch next.
          </p>
          <div className="footer-links">
            <div className="footer-section">
              {isLoggedIn ? (
                <Link to="/about" className="footer-link">
                  About Project
                </Link>
              ) : (
                <Link to="/login" className="footer-link">
                  About Project
                </Link>
              )}
            </div>
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subheading">Quick Links</h4>
          <ul className="footer-list">
            <li>
              <Link to="/team" className="footer-link">
                Development Team
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subheading">Connect With Us</h4>
          <div className="footer-contact">
            <a
              href="mailto:support@watchbuddy.app"
              className="footer-contact-link"
            >
              <Mail size={16} className="contact-icon" />
              support@watchbuddy.app
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/your-repo/watchbuddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com/watchbuddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-link"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com/watchbuddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} WatchBuddy. All rights reserved.
          <a
            href="https://www.themoviedb.org"
            target="_blank"
            rel="noopener noreferrer"
            className="tmdb-link"
          ></a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
