import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:1337/api/",
});

axiosInstance.interceptors.request.use(
  (request) => {
    const accessToken = localStorage.getItem("jwt");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
