import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';


import Layout from './components/commons/layout/index';
import Home from './components/home';
import DepartmentsPage from './components/department/DepartmentsPage';
import DepartmentDetail from './components/department/DepartmentDetail';
import EmployeesPage from './components/employee/EmployeesPage';
import EmployeeDetail from './components/employee/EmployeeDetail';
import LoginPage from "./components/login/LoginPage";
import ProfilePage from "./components/profile/ProfilePage";
import authService from './services/authService';
import './helpers/authConfig';
import 'bootstrap';
import './index.scss';


const history = createBrowserHistory();
const app = document.getElementById('app');
const store = configureStore();


// Private routes
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    authService.loggedIn() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={ProfilePage}/>
        <Layout>
          <PrivateRoute exact path="/" component={Home}/>
          <PrivateRoute exact path="/departments" component={DepartmentsPage}/>
          <PrivateRoute exact path="/departments/:id" component={DepartmentDetail}/>
          <PrivateRoute exact path="/employees" component={EmployeesPage}/>
          <PrivateRoute exact path="/employees/:id" component={EmployeeDetail}/>
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/profile" component={ProfilePage}/>
        </Layout>
      </Switch>
    </Router>
  </Provider>,
  app
);
