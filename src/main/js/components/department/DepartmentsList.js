
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DepartmentItem = ({department, onDelete}) => {
    return (
        <tr>
            <td>{department.name}</td>
            <td>{department.code}</td>
            <td>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(department)}><i className="fa fa-trash"/></button>
                <NavLink to={`/departments/${department.id}`} className="ml-sm-2 ml-md-2 ml-xs-auto ml-lg-2 btn btn-sm btn-primary"><i className="fa fa-pencil"/></NavLink>
            </td>
        </tr>

    );
};

const DepartmentsList = ({departments, onDelete, hideButtonNew}) => {

    const departmentItems = departments.map( department => <DepartmentItem key={department.id} onDelete={onDelete} department={department} />);

    return (
        <div className="col-sm-12 col-md-12 col-xs-12">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {departmentItems}    
                </tbody>
            </table>
        </div>
        

    );
};

DepartmentsList.propTypes = {
    departments: PropTypes.array.isRequired
};

DepartmentItem.protoType = {
    department: PropTypes.object.isRequired
};

export default DepartmentsList;