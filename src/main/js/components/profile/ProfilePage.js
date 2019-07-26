import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as profileActions from '../../actions/profileActions';
import utilService from '../../services/utilService';
import profileService from '../../services/profileService';
import _ from 'lodash';
import ProfileForm from './ProfileForm';
import Alert from '../commons/alert';
import $ from 'jquery';


class ProfilePage extends Component {

  constructor(props, context) {
    super(props, context);

    //Binding events
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      done: false,
      errors: {}
    }
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  componentWillMount(){
    if (this.props.match.path !== '/register'){
      const userId = utilService.decode(localStorage.jwt).id;
      this.getUserProfile(userId);
    }

  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  getUserProfile(userId){
    this.props.actions.loadProfile(userId);
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  handleFieldValidation(field, errors=null) {
    let fields = this.props.profile;
    let formIsValid = true;
    let _errors = errors !== null ? errors : {};

    if (fields[field] === "") {
      formIsValid = false;
      _errors[field] = `${field} cannot be empty`;
    }

    this.setState({errors: _errors});
    return formIsValid;
  };

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  handleFormValidation(){
    let fields = this.props.profile;
    let formIsValid = true;
    let errors = {};

    //Name
    if(fields["username"] === ""){
      formIsValid = false;
      errors["username"] = "Username cannot be empty";
    }

    //First name
    if(fields["firstName"] === ""){
      formIsValid = false;
      errors["firstName"] = "First name cannot be empty";
    }

    //Last name
    if(fields["lastName"] === ""){
      formIsValid = false;
      errors["lastName"] = "Last name cannot be empty";
    }

    //Email
    if(fields["email"] === ""){
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    }

    //Password
    if(fields["password"] === ""){
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }

    if(fields["passwordConfirm"] === ""){
      formIsValid = false;
      errors["passwordConfirm"] = "Cannot be empty";
    }

    if (fields["password"] !== fields["passwordConfirm"]){
      formIsValid = false;
      errors["passwordConfirm"] = "Password doesn't match.";
    }

    this.setState({errors: errors});
    return formIsValid;

  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  onSave(event){
    if (this.handleFormValidation()) {
      if (this.props.match.path !== '/register') {
        const userId = utilService.decode(localStorage.jwt).id;
        this.props.actions.updateProfile(userId, this.props.profile);

      } else {
        this.props.actions.createProfile(this.props.profile, this.props.history);
      }
    }
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  onChange(event){
    const field = event.target.name;
    const profile = this.props.profile;
    profile[field] = event.target.value;
    this.handleFieldValidation(field);
    return this.setState({profile});

  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  render() {
    const el = this.state.done ?
      <Alert type="primary" text="Profile save with success, click here <NavLink className='alert-link' to='/login'> Login </NavLink>"/> : '';

    return (
      <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
        <h1> Profile  </h1>
        {el}
        <section className="component row text-left placeholders">
          <div className="col-sm-6 col-md-6 col-xs-12">
            <ProfileForm
              profile={this.props.profile}
              formName="profileForm"
              errors={this.state.errors}
              onSave={this.onSave}
              onChange={this.onChange}/>
          </div>
        </section>
      </main>

    );
  }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function mapStateToProps(state, ownProps) {
  if (!_.isEmpty(state.profile)){
    return {
       profile: state.profile
    };
  
  } else {

    return {
      profile: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
      }
    };
  }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(profileActions, dispatch)};
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));