import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as departmentActions from '../../actions/departmentActions';
import * as employeeActions from '../../actions/employeeActions';
import _ from 'lodash';
import DepartmentForm from './DepartmentForm';



class DepartmentDetail extends Component {

  constructor(props, context) {
    super(props, context);

    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      department: this.props.department,
      employees: this.props.employees,
      errors: {}
    };
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  componentWillMount(){
    this.props.employeesActions.loadEmployees();
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  componentWillReceiveProps(nextProps){
    if (!_.isEmpty(nextProps.departments)) {
      this.setState({department: nextProps.department});
    }

    if (!_.isEmpty(nextProps.employees) && _.first(nextProps.employees).id !== ''){
      this.setState({employees: nextProps.employees});
    }
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;

  handleFormValidation(){
    let fields = this.props.department;
    let formIsValid = true;
    let errors = {};

    //Name
    if(fields["name"] === ""){
      formIsValid = false;
      errors["name"] = "name cannot be empty";
    }

    if(fields["code"] === ""){
      formIsValid = false;
      errors["code"] = "code cannot be empty";
    }


    this.setState({errors: errors});
    return formIsValid;

  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  onChange(event){
    const field = event.target.name;
    const department = this.props.department;
    department[field] = event.target.value;
    //this.handleFieldValidation(field);
    return this.setState({department});
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  onSave(event){
    event.preventDefault();

    if (this.handleFormValidation()) {
      if (_.has(this.props.department, 'id')) {
        this.props.actions.updateDepartment(this.props.department.id, this.props.department, this.props.history);
      } else {
        this.props.actions.createDepartment(this.props.department, this.props.history);
      }
    }

  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  render() {
    return (
      <main className="col-sm-12 ml-sm-auto col-md-12 pt-3" role="main">
        <section className="component row placeholders">
          <div className="col-sm-6 col-md-6 col-xs-12">
            <DepartmentForm
              department={this.props.department}
              formName="departmentForm"
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
  let department = {name: '', code: ''};

  if (state.departments.length && ownProps.match.params.id !== 'new'){
    department = Object.assign({}, _.find(state.departments, x => x.id === parseInt(ownProps.match.params.id)));
  }
  return {
    department: department,
  };
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(departmentActions, dispatch),
    employeesActions: bindActionCreators(employeeActions, dispatch)
  };
}


DepartmentDetail.propTypes = {
  department: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DepartmentDetail));