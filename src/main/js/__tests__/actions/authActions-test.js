import * as actions from '../../actions/authActions';
import types from '../../actions/actionTypes';

describe('auth actions', () => {

  it('should create an action loginSuccess', () => {
    const text = 'LOGIN_SUCCESS';
    
    const expectedAction = {
      type: types.LOGIN.SUCCESS
    };
    expect(actions.loginSuccess()).toEqual(expectedAction);
  });

  it('should create an action logoffSuccess', () => {
    const text = 'LOGOFF_SUCCESS';
    
    const expectedAction = {
      type: types.LOGOFF.SUCCESS
    };
    expect(actions.logoutSuccess()).toEqual(expectedAction);
  });

});