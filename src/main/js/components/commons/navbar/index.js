import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const Navbar = ({...props}) => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="#">Dashboard</a>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
              data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" >
            <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/departments" className="nav-link" activeClassName="active">Departments</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/employees" className="nav-link" activeClassName="active">Employees</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"
               id="navbarDropdownMenuLink"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false">
              {props.username}
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to="/profile"> Profile </Link>
              <div className="dropdown-divider"/>
              <a className="dropdown-item" onClick={props.onLogout}> Logout </a>
            </div>
          </li>
        </ul>

      </div>
    </nav>
  );
};

Navbar.propTypes = {
  username: PropTypes.string.isRequired
};

export default Navbar;