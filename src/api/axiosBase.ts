import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../utils/constant";
import { store } from "../redux/store";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = store.getState().auth?.token;
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => 
        // Here you can refresh token if needed
         Promise.reject(error)
    
);

export default axiosInstance;
