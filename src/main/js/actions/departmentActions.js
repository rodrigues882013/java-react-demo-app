import departmentsService from '../services/departmentsService';
import types from './actionTypes';

/*
 * Action creators
 */

export const loadDepartmentsSuccess = (departments) => ({type: types.LOAD.DEPARTMENTS.SUCCESS, departments});

export const updateDepartmentSuccess = (department)=> ({type: types.UPDATE.DEPARTMENT.SUCCESS, department});

export const createDepartmentSuccess = (department) => ({type: types.CREATE.DEPARTMENT.SUCCESS, department});

export const deleteDepartmentSuccess = (department) => ({type: types.DELETE.DEPARTMENT.SUCCESS, department});

export const loadDepartmentsEmptiesSuccess = (departmentsEmpties) => ({type: types.LOAD.DEPARTMENTS.EMPTIES.SUCCESS, departmentsEmpties});


/*
* Actions
* */
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export function loadDepartments() {

  return function(dispatch){
    return departmentsService
      .list()
      .then( response =>{
        dispatch(loadDepartmentsSuccess(response.data));

      })
      .catch(error => console.error(error));
  };

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function loadDepartmentsEmpties() {

  return function(dispatch){
    return departmentsService
      .getEmpties()
      .then( response =>{
        dispatch(loadDepartmentsEmptiesSuccess(response.data));

      })
      .catch(error => console.error(error));
  };

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function updateDepartment(id, department, history) {

  return function(dispatch){
    return departmentsService
      .update(id, department)
      .then( response =>{
        dispatch(updateDepartmentSuccess(response.data));
        history.push(`/departments`);
      })
      .catch(error => console.error(error));
  };

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function deleteDepartment(id, history) {

  return function(dispatch){
    return departmentsService
      .remove(id)
      .then( response =>{
        dispatch(deleteDepartmentSuccess(response.data));
        history.push(`/departments`);
      })
      .catch(error => console.error(error));
  };

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export function createDepartment(department, history) {

  return function(dispatch){
    return departmentsService
      .create(department)
      .then( response => {
        dispatch(createDepartmentSuccess(response.data));
        history.push(`/departments`);

      })
      .catch(error => console.error(error));
  };

}
