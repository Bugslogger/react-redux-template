import React from "react";
import { Link } from "react-router-dom";
import { ReactIcons } from "../../utils/functions";

const Header = () => {
  return (
    <nav class="navbar bg-body-tertiary bg-dark text-light">
      <div class="container">
        <Link to={"/"} class="text-light navbar-brand">
          React Template
        </Link>
        <div class="d-flex" role="search">
          <Link
            to="https://github.com/Bugslogger/react-redux-template"
            class="nav-link text-white mx-2"
            aria-current="page"
            style={{ fontSize: "1.5em" }}
          >
            {React.createElement(ReactIcons("FaGithub"))}
          </Link>

          <Link
            to="https://www.youtube.com/@bugslogger"
            class="nav-link text-white mx-2"
            aria-current="page"
            style={{ fontSize: "1.5em" }}
          >
            {React.createElement(ReactIcons("FaYoutube"))}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
