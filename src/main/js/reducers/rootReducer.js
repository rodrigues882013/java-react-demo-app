import {combineReducers} from 'redux';
import employees from './employeeReducers';
import departments from './departmentReducers';
import departmentsEmpties from './emptyDepartmentsReducers';
import profile from './profileReducers';


import auth from './authReducers';


/**
 * Reducers are pure functions that receive actual state and return the new state
 *
 * Things you should never do inside a reducer:
 *  - Mutate its arguments;
 *  - Perform side effects like API calls and routing transitions;
 *  - Call non-pure functions, e.g. Date.now() or Math.random().
 */

const rootReducers = combineReducers({
  auth,
  profile,
  employees,
  departments,
  departmentsEmpties
});

export default rootReducers;
