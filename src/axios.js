import axios from "axios";

const service = axios.create({
  baseURL: "https://api.openweathermap.org/",
  timeout: 5000,
  params: {
    appid: "09572db9ca5b5fe38a62c471c2eb3a42",
  },
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
