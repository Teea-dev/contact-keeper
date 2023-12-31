import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = ({ title, icon }) => {
  return (
    <div className=" navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Nav.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Nav;
