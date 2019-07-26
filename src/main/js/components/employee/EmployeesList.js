
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const EmployeeItem = ({employee, onDelete}) => {
    return (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.lastName}</td>
            <td>{employee.cpf}</td>
            <td>{employee.department.name}</td>
            <td>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(employee)}><i className="fa fa-trash"/></button>
                <NavLink to={`/employees/${employee.id}`} className="ml-sm-2 ml-md-2 ml-xs-auto ml-lg-2 btn btn-sm btn-primary"><i className="fa fa-pencil"/></NavLink>
            </td>
        </tr>
    );
};

const EmployeesList = ({employees, onDelete}) => {

    const employeeItems = employees.map( employee =>
      <EmployeeItem key={employee.id} employee={employee} onDelete={onDelete}/>);

    return (
        <div className="col-sm-12 col-md-12 col-xs-12">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>CPF</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {employeeItems}    
                </tbody>
            </table>
        </div>
        

    );
};

EmployeesList.propTypes = {
    employees: PropTypes.array.isRequired
};

EmployeeItem.protoType = {
    employee: PropTypes.object.isRequired
};

export default EmployeesList;