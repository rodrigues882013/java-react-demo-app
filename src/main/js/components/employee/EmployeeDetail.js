import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';
import * as departmentActions from '../../actions/departmentActions';

import _ from 'lodash';
import EmployeeForm from './EmployeeForm';



class EmployeeDetail extends Component {

  constructor(props, context) {
    super(props, context);

    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      departments: this.props.departments,
      employee: this.props.employee,
      errors: {}
    };
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  componentWillMount(){
    this.props.departmentActions.loadDepartments();
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  componentWillReceiveProps(nextProps){
    if (!_.isEmpty(nextProps.employees)) {
      this.setState({employee: nextProps.employee});
    }

    if (!_.isEmpty(nextProps.departments) && _.first(nextProps.departments).id !== ''){
      this.setState({departments: nextProps.departments});
    }
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  handleFormValidation(){
    let fields = this.props.employee;
    let formIsValid = true;
    let errors = {};

    //Name
    if(fields["name"] === ""){
      formIsValid = false;
      errors["name"] = "Name cannot be empty";
    }

    if(fields["lastName"] === ""){
      formIsValid = false;
      errors["lastName"] = "Last name cannot be empty";
    }

    if(fields["cpf"] === ""){
      formIsValid = false;
      errors["cpf"] = "CPF cannot be empty";
    }

    if(fields["celPhone"] === ""){
      formIsValid = false;
      errors["celPhone"] = "Cel phone cannot be empty";
    }


    this.setState({errors: errors});
    return formIsValid;

  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  onSave(event){
    event.preventDefault();

    if (this.handleFormValidation()) {
      if (!_.has(this.props.employee.department, 'name')) {

        const employee = this.props.employee;
        employee.department = this.state.departments[0];
        this.setState({employee});
      }

      if (_.has(this.props.employee, 'id')) {
        this.props.actions.updateEmployee(this.props.employee.id, this.props.employee, this.props.history);
      } else {
        this.props.actions.createEmployee(this.props.employee, this.props.history);
      }
    }
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  onChange(event){
    const value = _.isEqual(event.target.name, 'department') ?
      _.find(this.state.departments, x => x.id === parseInt(event.target.value)) : event.target.value;
    const field = event.target.name;
    const employee = this.props.employee;

    employee[field] = value;
    return this.setState({employee});
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  render() {
    return (
      <main className="col-sm-12 ml-sm-auto col-md-12 pt-3" role="main">
        <section className="component row placeholders">
          <div className="col-sm-6 col-md-6 col-xs-12">
            <EmployeeForm
              employee={this.props.employee}
              departments={this.state.departments}
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
  let employee = {name: '', lastName: '', cpf: '', celPhone: '', department: {}};
  let departments = [{name: '', code: '', id: ''}];

  if (state.employees.length && ownProps.match.params.id !== 'new'){
    employee = Object.assign({}, _.find(state.employees, x => x.id === parseInt(ownProps.match.params.id)));
  }

  if (!_.isEmpty(state.departments)){
    departments = state.departments;
  }


  return {
    employee: employee,
    departments: departments
  };


}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch),
    departmentActions: bindActionCreators(departmentActions, dispatch),
  };
}


EmployeeDetail.propTypes = {
  employee: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeeDetail));