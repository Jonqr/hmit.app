import axios from "axios";


const url = "http://localhost:3000";
const srcAxios = axios.create({
    baseURL: url+ "/api"
});

srcAxios.interceptors.request.use(
    function(config) {
        const token = window.localStorage.token;
        if (token) {
          config.headers.Authorization = token;
        }
        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
);

getUsuario(endpoint){
    return srcAxios.get(endpoint);
}