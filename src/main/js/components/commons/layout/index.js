import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loginActions from '../../../actions/authActions';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6
import utilService from '../../../services/utilService';

import Navbar from '../navbar';
import Footer from '../footer';
import Sidebar from '../sidebar';

class Layout extends Component {

  constructor(){
    super();

    this.state = {
      username: ''
    };

    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount(){
    this.state.username = utilService.decode(localStorage.jwt).sub;
  }

  onLogout(event){
    event.preventDefault();
    this.props.actions.logOutUser(this.props.history);
  }

  render() {
    return (
      <div>
        <Navbar username={this.state.username} onLogout={this.onLogout}/>
        <div className="container-fluid">
          <div className="row">
            {/*<Sidebar />*/}
            {this.props.children}
          </div>
        </div>
        {/*<Footer />*/}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default withRouter(connect(null, mapDispatchToProps)(Layout));
