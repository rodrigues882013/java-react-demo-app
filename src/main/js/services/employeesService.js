import axios from 'axios';

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _list(){
  return axios.get('http://localhost:8080/employees');
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _get(id){
  return axios.get(`http://localhost:8080/employees/${id}`);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _create(employee){
  return axios.post(`http://localhost:8080/employees`, employee);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _update(id, employee){
  return axios.put(`http://localhost:8080/employees/${id}`, employee);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _remove(id){
  return axios.delete(`http://localhost:8080/employees/${id}`);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export default {
  list: _list,
  get: _get,
  create: _create,
  update: _update,
  remove: _remove
};