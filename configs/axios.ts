let { default: axios } = require("axios");

let instance = axios.create();

const onRequest = (config: any) => {
  config.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  return config;
};

instance.interceptors.request.use(onRequest);

export default instance;
