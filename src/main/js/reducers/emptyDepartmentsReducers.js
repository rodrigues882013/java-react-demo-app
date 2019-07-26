import types from '../actions/actionTypes';
import initialState from './initialState';

function emptyDepartmentReducers(state = initialState.departmentsEmpties, action){
  switch(action.type) {
    case types.LOAD.DEPARTMENTS.EMPTIES.SUCCESS:
      return action.departmentsEmpties;

    default:
      return state;
  }
}

export default emptyDepartmentReducers;