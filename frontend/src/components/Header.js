import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow" style={{ backgroundColor: "#a284d9ff" }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">SujinSpace: Personal Diary</Link>
        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/new" ? "active" : ""}`}
                to="/new"
              >
                New Entry
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}