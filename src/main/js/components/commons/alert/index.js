
import React from 'react';
import {PropTypes} from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import $ from 'jquery';


const Alert = ({text, type}) => {

  return (
    <div className={`alert alert-${type}`} role="alert">
      {text}
    </div>
  );
};


Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // onFire: PropTypes.func.isRequired,
};

export default Alert;