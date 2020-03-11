import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Meeting Rooms
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/list-room" className="nav-link">
              List Room
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-room" className="nav-link">
              Add Room
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menubar;
