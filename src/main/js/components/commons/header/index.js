import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const Header = ({...props}) => {
  return (
    <nav>
      <Link to="/" activeClassName="active">Home</Link>
      {" | "}
      <Link to="/cats" activeClassName="active">Cats</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;