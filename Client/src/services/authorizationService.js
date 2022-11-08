/* eslint-disable no-unused-vars */
import axios from "axios";
import { API_ROUTE, ORIGIN_URL } from "../config/constants";

export const apiGateWay = axios.create({
    baseURL: API_ROUTE,
    timeout: 300000
});

apiGateWay.interceptors.response.use(
    res => {
        return res;
    },
    function (res) {
        if (res.response && res.response.status === 401) {
            localStorage.clear();
            window.location.href = "/";
        }
        return res;
    }
);

// apiGateWay.interceptors.request.use(function (config) {
//     const token = localStorage.getItem("fca-token");
//     config.headers = {
//         ...config.headers,
//         Authorization: `Bearer ${token}`,
//         "Access-Control-Allow-Origin": ORIGIN_URL
//     };
//     return config;
// });
