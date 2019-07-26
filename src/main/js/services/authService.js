import axios from 'axios';

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _login(credentials){
  return axios.post('http://localhost:8080/login', credentials);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _logout(){
  let result = true;

  try{
    localStorage.removeItem('jwt');
    
  } catch(err){
    console.error(err);
    result = false;
  }
  
  return result;
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _loggedIn() {
  return !!localStorage.jwt;
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _logOut() {
  
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _requireAuth(nextState, replace) {
  if (!_loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

export default {
  login: _login,
  logout: _logout,
  loggedIn: _loggedIn,
  logOut: _logOut,
};