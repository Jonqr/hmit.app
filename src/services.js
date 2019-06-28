import axios from "axios";

const url = "http://localhost:3000" ; 

const axiosInstance = axios.create({
    baseURL: url + "/api"
});

axiosInstance.interceptors.request.use(
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






export const api = {
    get(endpoint) {
      return axiosInstance.get(endpoint);
    },
    post(endpoint, body) {
      return axiosInstance.post(endpoint, body);
    },
    put(endpoint, body) {
      return axiosInstance.put(endpoint, body);
    },
    delete(endpoint) {
      return axiosInstance.delete(endpoint);
    },
    login(body) {
      return axios.post(url + body);
    },
    validateToken() {
      return axiosInstance.post(url + "/jwt-auth/v1/token/validate");
    }
  };

//api CEP
export function getCep(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}