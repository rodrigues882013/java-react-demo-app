import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../commons/text-input';


const ProfileForm = ({profile, formName, errors, onChange, onSave}) => {

  return (
    <form name={formName}>
      <div className="form-group">
        <TextInput
          id="txtUsername"
          name="username"
          label="Username"
          placeHolder="Username"
          value={profile.username}
          onChange={onChange}
          error={errors['username']}/>
      </div>

      <div className="form-group">
        <TextInput
          id="txtFirstname"
          name="firstName"
          label="First Name"
          placeHolder="First Name"
          value={profile.firstName}
          onChange={onChange}
          error={errors['firstName']}/>
      </div>

      <div className="form-group">
        <TextInput
          id="txtLastname"
          name="lastName"
          label="Last Name"
          placeHolder="Last Name"
          value={profile.lastName}
          onChange={onChange}
          error={errors['lastName']}/>
      </div>

      <div className="form-group">
        <TextInput
          id="txtEmail"
          name="email"
          label="Email"
          placeHolder="Email"
          type="email"
          value={profile.email}
          onChange={onChange}
          error={errors['email']}/>
      </div>

      <div className="form-group">
        <TextInput
          id="txtPassword"
          name="password"
          label="Password"
          type="password"
          placeHolder="Password"
          value={profile.password}
          onChange={onChange}
          error={errors['password']}/>
      </div>

      <div className="form-group">
        <TextInput
          id="txtPasswordConfirm"
          name="passwordConfirm"
          label="Confirm password"
          type="password"
          placeHolder="Confirm password"
          onChange={onChange}
          error={errors['passwordConfirm']}/>
      </div>

      <button type="button" onClick={onSave} className="btn btn-primary">Save</button>
    </form>
  );
};

export default ProfileForm;

ProfileForm.propTypes = {
    profile: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};