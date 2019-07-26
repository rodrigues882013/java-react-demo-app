
import profileService from '../services/profileService';
import types from './actionTypes';


/*
 * Action creators
 */

export const loadProfileSuccess = (profile) => ({type: types.LOAD.PROFILE.SUCCESS, profile});

export const updateProfileSuccess = (profile) => ({type: types.UPDATE.PROFILE.SUCCESS, profile});

export const createProfileSuccess = (profile) => ({type: types.CREATE.PROFILE.SUCCESS, profile});

export const createProfileFailed = () => ({type: types.CREATE.PROFILE.FAILED});



/*
* Actions
* */
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function loadProfile(id) {

  return function(dispatch){
    return profileService
      .get(id)
      .then( response => dispatch(loadProfileSuccess(response.data)))
      .catch( error => console.error(error));
  };

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function updateProfile(id, profile, history) {

  return function(dispatch){
    return profileService
      .update(id, profile)
      .then( response => dispatch(updateProfileSuccess(response.data)))
      .catch( error => console.error(error));
  };

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function createProfile(profile, history) {

  return function(dispatch){
    return profileService
      .create(profile)
      .then( response => {
        dispatch(createProfileSuccess(response.data));
        history.push(`/login`);
      })
      .catch( error => {
        console.error(error);
        dispatch(createProfileFailed());

      });
  };

}