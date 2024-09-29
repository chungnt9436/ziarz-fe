import axios from 'axios';
import { TokenService } from './tokenService';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
const ApiService = {
    setHeader() {
        const token = TokenService.getToken(); // Lấy token từ cookie
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.defaults.headers.common['Accept'] = 'application/json';
        }
    },

    setUploadHeader() {
        const token = TokenService.getToken(); // Lấy token từ cookie
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.defaults.headers.common['Accept'] = '*/*';
        }
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(resource, config) {
        config = config || {};
        return axios.get(resource, config);
    },

    post(resource, payload, config) {
        config = config || {};
        return axios.post(resource, payload, config);
    },

    put(resource, payload) {
        return axios.put(resource, payload);
    },

    delete(resource, payload) {
        return axios.delete(resource, payload);
    },

    customRequest(data) {
        return axios(data)
    }
};

export { ApiService }
