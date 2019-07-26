
import types from '../actions/actionTypes';
import initialState from './initialState';

function profileReducers(state = initialState.profile, action){

  let newState = state;
  
  switch(action.type) {
    case types.LOAD.PROFILE.SUCCESS:
      newState = action.profile;
      break;

    case types.CREATE.PROFILE.SUCCESS:
      newState = action.profile;
      break;

    case types.UPDATE.PROFILE.SUCCESS:
      newState = action.profile;
      break;

    case types.CREATE.PROFILE.FAILED:
      newState = state;
      break;
  }

  return newState;
}

export default profileReducers;