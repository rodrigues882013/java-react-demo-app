import axios from 'axios';

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _get(id){
  return axios.get(`http://localhost:8080/users/${id}`);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _update(id, profile){
  return axios.put(`http://localhost:8080/users/${id}`, profile);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function _create(profile){
  return axios.post(`http://localhost:8080/register`, profile);
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export default {
  get: _get,
  update: _update,
  create: _create
};