
import types from './actionTypes';
import authService from "../services/authService";


/*
 * Action creators
 */

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const loginSuccess = () => ({type: types.LOGIN.SUCCESS});

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export const logoutSuccess = () => ({type: types.LOGOFF.SUCCESS});

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*
* Actions dispatcher
* */
export function logInUser(credentials, history) {
  return function(dispatch){
    return authService
      .login(credentials)
      .then( response => {
        localStorage.setItem('jwt', response.data.token);
        dispatch(loginSuccess());
        history.push('/home');
      })
      .catch(error => console.error(error));
  };

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function logOutUser(history) {
  return function(dispatch){
    if (authService.logout()){
      dispatch(logoutSuccess());
      history.push('/login');
    }
  };

}