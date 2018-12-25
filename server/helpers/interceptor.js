const myConfig = require("./../config");

module.exports = function interceptor(axios) {
  axios.interceptors.request.use(
    config => {
      config.baseURL = `${myConfig.server.protocol}://${myConfig.server.host}:${
        myConfig.server.port
      }/db/`;
      console.log(config.baseURL);
      config.timeout = 5000;
      config.headers = { "Content-Type": "application/json" };
      return config;
    },
    error => {
      console.log(error.response.status);
      return Promise.reject();
    }
  );
};
