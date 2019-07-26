
import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../commons/text-input';
import SelectInput from '../commons/select-input';

const EmployeeForm = ({employee, departments, errors, onSave, onChange}) => {
    return (
        <form>

          <div className="form-group">
            <TextInput
              id="txtName"
              name="name"
              label="Name"
              placeHolder="Name"
              value={employee.name}
              error={errors['name']}
              onChange={onChange}/>
          </div>
          <div className="form-group">
            <TextInput
              id="txtLastName"
              name="lastName"
              label="Last Name"
              placeHolder="Last Name"
              value={employee.lastName}
              error={errors['lastName']}
              onChange={onChange}/>
          </div>
          <div className="form-group">
            <TextInput
              id="txtCpf"
              name="cpf"
              label="CPF"
              placeHolder="CPF"
              value={employee.cpf}
              error={errors['cpf']}
              onChange={onChange}/>
          </div>
          <div className="form-group">
            <TextInput
              id="txtCelPhone"
              name="celPhone"
              label="Cel Phone"
              placeHolder="Cel Phone"
              value={employee.celPhone}
              error={errors['celPhone']}
              onChange={onChange}/>
          </div>
          <SelectInput
            id='department'
            label='Department'
            element='department'
            dataSource={departments}
            selected={employee.department}
            onChange={onChange}/>
         
          <button type="submit" onClick={onSave} className="btn btn-primary m-t">Save</button>
        </form>
      );
};

export default EmployeeForm;
//
// EmployeeFrom.propTypes = {
//   name: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   cpf: PropTypes.string.isRequired,
//   celPhone: PropTypes.string.isRequired,
//   departments: PropTypes.object.isRequired
// };