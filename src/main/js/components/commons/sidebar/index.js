import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';



const Sidebar = ({...props}) =>  {

  return (
    <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
                <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
               <NavLink to="/departments" className="nav-link" activeClassName="active">Departments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/employees" className="nav-link" activeClassName="active">Employees</NavLink>
            </li>
        </ul>
    </nav>

  );
};

export default Sidebar;