import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About / Address */}
        <div className="footer-section">
          <h3>Recipe Finder</h3>
          <p>Find and save your favorite recipes from around the world!</p>
          <p>📍 123 Culinary Street, Food City</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ contact@recipefinder.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/favorites">Favorites</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐 Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">▶ YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Recipe Finder. All rights reserved.</p>
      </div>
    </footer>
  );
}
