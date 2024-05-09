import axios from "axios";

axios.interceptors.request.use(
    (config) => {
        config.baseURL = "https://localhost:5000/api/";
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
   null,

    (error) => {
        console.log("Error en la respuesta", error);
        //No autorizado. El token expiró o es inválido
        if (error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

export default axios;
