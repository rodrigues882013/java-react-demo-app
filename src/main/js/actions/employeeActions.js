import employeesService from '../services/employeesService';
import types from './actionTypes';


/*
 * Action creators
 */

export const loadEmployeesSuccess = (employees) => ({type: types.LOAD.EMPLOYEES.SUCCESS, employees});

export const updateEmployeeSuccess = (employee)=> ({type: types.UPDATE.EMPLOYEE.SUCCESS, employee});

export const createEmployeeSuccess = (employee) => ({type: types.CREATE.EMPLOYEE.SUCCESS, employee});

export const deleteEmployeeSuccess = (employee) => ({type: types.DELETE.EMPLOYEE.SUCCESS, employee});


/*
* Actions
* */
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function loadEmployees() {

  return function(dispatch){
    return employeesService
      .list()
      .then( response =>{
        dispatch(loadEmployeesSuccess(response.data));

      })
      .catch(error => console.error(error));
  };

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function deleteEmployee(id, history) {

  return function(dispatch){
    return employeesService
      .remove(id)
      .then( response =>{
        dispatch(deleteEmployeeSuccess(response.data));
        history.push(`/employees`);
      })
      .catch(error => console.error(error));
  };

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export function updateEmployee(id, employee, history) {
  
    return function(dispatch){
      return employeesService
        .update(id, employee)
        .then( response =>{
          dispatch(updateEmployeeSuccess(response.data));
          history.push(`/employees`);
        })
        .catch(error => console.error(error));
    };
  
  }

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export function createEmployee(employee, history) {
    
  return function(dispatch){
    return employeesService
      .create(employee)
      .then( response => {
        dispatch(createEmployeeSuccess(response.data));
        history.push(`/employees`);

      })
      .catch(error => console.error(error));
  };

}
