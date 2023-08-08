import { BASE_URL } from "./utils/request";

let { default: axios } = require("axios");

let instance = axios.create();

const onRequest = (config: any) => {
  config.baseURL = BASE_URL;
  const access_token = localStorage.getItem("accessToken") ?? ""
    config.headers.Authorization = `Bearer ${access_token}`;
  return config;
};

instance.interceptors.request.use(onRequest);

export default instance;
