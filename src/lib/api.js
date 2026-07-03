// Axios Instance + Interceptors   ** Abdullah ** 

import axios from "axios";

const api = axios.create({
    url: "https://e-commerce-api-3wara.vercel.app"
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }

    return config
});

export default api