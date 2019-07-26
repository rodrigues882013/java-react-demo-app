import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {withRouter, NavLink} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as departmentActions from '../../actions/departmentActions';
import _ from 'lodash';
import DepartmentsList from './DepartmentsList';


class DepartmentPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.onDelete = this.onDelete.bind(this);
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  componentWillMount() {
    this.props.actions.loadDepartments();
    this.props.actions.loadDepartmentsEmpties();
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  onDelete(department) {
    this.props.actions.deleteDepartment(department.id, this.props.history);
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  render() {
    const departments = this.props.departments;
    const departmentsEmpties = this.props.departmentsEmpties;
    const element =
      departments.length ? <DepartmentsList departments={departments} onDelete={this.onDelete}/> :
        <div className="col-sm-12 ml-sm-auto col-md-10 pt-3 text-center">
          <div className="alert alert-success" role="alert">
           No departments available.
          </div>
        </div>;

    return (
      <main className="col-sm-12 ml-sm-auto col-md-12 pt-3" role="main">
        <h1> Departments </h1>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-xs-12">
            Total of departments: {departments.length}
          </div>
          <div className="col-sm-6 col-md-6 col-xs-12">
            Total of departments empties: {departmentsEmpties.length}
          </div>
        </div>

        <section className="component row placeholders">
          {element}
        </section>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xs-12">
            <NavLink to="departments/new" className="btn btn-primary" > New Department </NavLink>
          </div>
        </div>
      </main>

    );

  }
}

DepartmentPage.propTypes = {
  departments: PropTypes.array.isRequired,
  departmentsEmpties: PropTypes.array.isRequired
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function mapStateToProps(state, ownProps) {
  if (!_.isEmpty(state.departments)){
    return {
      departments: state.departments,
      departmentsEmpties: state.departmentsEmpties
    };
  } else {

    return {
      departments: [],
      departmentsEmpties: []
    };
  }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(departmentActions, dispatch)};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DepartmentPage));