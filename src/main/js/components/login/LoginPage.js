import React, {Component} from 'react';
import './login.scss';
import LoginForm from "./LoginForm";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loginActions from '../../actions/authActions';
import {NavLink, withRouter} from 'react-router-dom';
import Alert from '../commons/alert';


class LoginPage extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      credentials: {
        username: '',
        password: ''
      },
      loginError: false
    };

    //Bind events
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  onChange(event){
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials});
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  onSave(event){
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials, this.props.history);
    this.setState({loginError: true});
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  render() {
    const el = this.state.loginError ?
      <Alert type="danger" text="Password or username doesn't match, try again."/> : '';

    return (
      <div className="container-fluid">
        <div className="row">
          <main className="col-sm-12 col-xs-12 col-md-12 ml-sm-auto pt-3" role="main">
            <LoginForm
              onSave={this.onSave}
              onChange={this.onChange}
              credentials={this.state.credentials} />
          </main>
        </div>

        <div className="row justify-content-center">
          <NavLink to="/register"> Or Register here. </NavLink>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-4 col-xs-12 col-md-4 align-self-center">
            {el}
          </div>
        </div>
      </div>

    );

  }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));