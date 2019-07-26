import axios from 'axios';

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _list(){
  return axios.get('http://localhost:8080/departments');
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _get(id){
  return axios.get(`http://localhost:8080/departments/${id}`);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _create(department){
  return axios.post(`http://localhost:8080/departments`, department);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _update(id, department){
  return axios.put(`http://localhost:8080/departments/${id}`, department);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _remove(id){
  return axios.delete(`http://localhost:8080/departments/${id}`);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _getEmpties(){
  return axios.get(`http://localhost:8080/departments/empty`);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export default {
  list: _list,
  get: _get,
  create: _create,
  update: _update,
  remove: _remove,
  getEmpties: _getEmpties
};