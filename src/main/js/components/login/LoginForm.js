
//Core
import React, {Component} from 'react';

import TextInput from '../commons/text-input';
import PropTypes from 'prop-types';


const LoginForm = ({onChange, onSave, credentials}) => {

  const userLabel = "Username";
  const pleaseSignIn = "Please sign in";
  const password = "Password";
  const rememberMe = "Remember me";
  const signIn = "Sign in";

  return (
    <form className="form-signin">
      <h2 className="form-signin-heading">{pleaseSignIn}</h2>
      <TextInput
        id="txtUsername"
        name="username"
        label={userLabel}
        placeHolder="Username"
        value={credentials.username}
        onChange={onChange}/>

      <TextInput
        id="txtPassword"
        name="password"
        label={password}
        type="password"
        placeHolder="Password"
        value={credentials.password}
        onChange={onChange}/>
      {/*<label for="inputEmail" className="sr-only">{emailLabel}</label>*/}
      {/*<input*/}
      {/*type="email"*/}
      {/*id="inputEmail"*/}
      {/*className="form-control"*/}
      {/*placeholder="Email address"*/}
      {/*required autoFocus/>*/}

      {/*<label for="inputPassword" className="sr-only">{password}</label>*/}
      {/*<input type="password"*/}
      {/*id="inputPassword"*/}
      {/*className="form-control"*/}
      {/*placeholder="Password"*/}
      {/*required/>*/}

      <div className="checkbox">
        <label>
          <input type="checkbox" value="remember-me"/> {rememberMe}
        </label>
      </div>

      <button
        onClick={onSave}
        className="btn btn-lg btn-primary btn-block"
        type="submit">

        {signIn}
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  credentials: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default LoginForm;