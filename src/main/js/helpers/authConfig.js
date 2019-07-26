
import axios from 'axios';
import _ from 'lodash';


// Add a request interceptor
axios
  .interceptors
  .request
  .use(function (config) {

    if (_.isNull(config.headers)) {
      config.headers = {};
    }

    if (!_.isUndefined(localStorage.jwt)) {
      config.headers['Authorization'] = localStorage.jwt;

    }

    return config;

  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
axios
  .interceptors
  .response
  .use(function (response) {
    if (response.status === 401) {
      console.log("Response 401");
    }
    return response;

  }, function (error) {
    if (error.status === 401) {
      console.log("Response Error 401", error);
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  });
