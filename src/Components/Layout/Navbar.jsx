import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = props => {
    const {title} = props
  return <nav className="navbar bg-primary">
         <Link to="/">{title}</Link> 
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
      </nav>;
};
Navbar.defaultProps = {
  title: "GitHub Finder"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
