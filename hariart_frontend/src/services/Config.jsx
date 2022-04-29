import axios from "axios";

const serviceAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});

serviceAxios.interceptors.request.use((config) => ({
    ...config,
    params: {
        ...config.params,
    },
}));

serviceAxios.interceptors.response.use(
    (res) => res,
    (error) => {
        throw error;
    }
);

export default serviceAxios;
