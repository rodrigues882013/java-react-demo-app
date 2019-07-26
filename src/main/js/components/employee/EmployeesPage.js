import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {withRouter, NavLink} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';
import _ from 'lodash';
import EmployeesList from './EmployeesList';


class EmployeesPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.onDelete = this.onDelete.bind(this);
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  componentWillMount() {
    this.props.actions.loadEmployees();
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  onDelete(employee) {
    this.props.actions.deleteEmployee(employee.id, this.props.history);
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  render() {
    const employees = this.props.employees;
    const element =
      employees.length ? <EmployeesList employees={employees} onDelete={this.onDelete}/> :
        <div className="col-sm-12">
          <div className="alert alert-success" role="alert">
            No employee available.
          </div>
        </div>;

    return (
      <main className="col-sm-12 ml-sm-auto col-md-12 pt-3" role="main">
        <h1> Employees </h1>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-xs-12">
            Total of employees: {employees.length}
          </div>
        </div>
        <section className="component row placeholders">
          {element}
        </section>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xs-12">
            <NavLink to="employees/new" className="btn btn-primary" > New Employee </NavLink>
          </div>
        </div>
      </main>

    );
  }
}


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

EmployeesPage.propTypes = {
  employees: PropTypes.array.isRequired
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function mapStateToProps(state, ownProps) {
  if (!_.isEmpty(state.employees)){
    return {
      employees: state.employees
    };
  } else {

    return {
      employees: []
    };
  }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(employeeActions, dispatch)};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeesPage));