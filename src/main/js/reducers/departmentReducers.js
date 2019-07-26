import types from '../actions/actionTypes';
import initialState from './initialState';


function departmentReducers(state = initialState.departments, action){
  switch(action.type) {

    case types.LOAD.DEPARTMENTS.SUCCESS:
      return action.departments;

    case types.UPDATE.DEPARTMENT.SUCCESS:
      return [...state.filter(x => x.id !== action.department.id), Object.assign({}, action.department)];

    case types.CREATE.DEPARTMENT.SUCCESS:
      return [...state.filter(x => x.id !== action.department.id), Object.assign({}, action.department)];

    case types.DELETE.DEPARTMENT.SUCCESS:
      const newState = Object.assign([], state);
      const idx = state.findIndex(x => x.id === action.department.id);
      newState.splice(idx, 1);
      return newState;

    default:
      return state;
  }
}

export default departmentReducers;