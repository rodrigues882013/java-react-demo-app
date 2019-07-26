import types from '../actions/actionTypes';
import initialState from './initialState';

function employeeReducers(state = initialState.employees, action){

  switch(action.type) {
    case types.LOAD.EMPLOYEES.SUCCESS:
      return action.employees;

    case types.UPDATE.EMPLOYEE.SUCCESS:
      return [...state.filter(x => x.id !== action.employee.id), Object.assign({}, action.employee)];

    case types.CREATE.EMPLOYEE.SUCCESS:
      return [...state.filter(x => x.id !== action.employee.id), Object.assign({}, action.employee)];

    case types.DELETE.EMPLOYEE.SUCCESS:
      const newState = Object.assign([], state);
      const idx = state.findIndex(x => x.id === action.employee.id);
      newState.splice(idx, 1);
      return newState;

    default:
      return state;
  }
}

export default employeeReducers;