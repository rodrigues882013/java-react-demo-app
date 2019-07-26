
import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../commons/text-input';
import SelectInput from '../commons/select-input';

const DepartmentForm = ({department, formName, errors, onSave, onChange}) => {
    return (
        <form name={formName}>

          <div className="form-group">
            <TextInput
              id="txtName"
              name="name"
              label="Name"
              placeHolder="Name"
              value={department.name}
              error={errors['name']}
              onChange={onChange}/>
          </div>
          <div className="form-group">
            <TextInput
              id="txtCode"
              name="code"
              label="Code"
              placeHolder="Code"
              value={department.code}
              error={errors['code']}
              onChange={onChange}/>
          </div>


          <button type="submit" onClick={onSave} className="btn btn-primary">Save</button>
        </form>
      );
};

export default DepartmentForm;

DepartmentForm.propTypes = {
  department: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
// EmployeeFrom.propTypes = {
//     name: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     created: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired
// };