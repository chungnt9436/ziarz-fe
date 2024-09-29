import {ApiService} from "./apiService";
import {TokenService} from './tokenService';

const AuthService = {
    signup: async (payload) => {
        let res = await ApiService.post('/api/v1/signup', payload);
        if (res.data.access_token) {
            TokenService.saveToken(res.data.access_token);
            ApiService.setHeader();
        }
        return res.data;
    },

    login: async (payload) => {
        let res = await ApiService.post('/api/v1/login', payload);
        if (res.data.access_token) {
            TokenService.saveToken(res.data.access_token);
            ApiService.setHeader();
        }
        return res.data;
    },

    account: async () => {
        ApiService.setHeader();
        let res = await ApiService.get('/api/v1/info');
        return res.data;
    },

    update: async (payload) => {
        ApiService.setHeader();
        let res = await ApiService.put('/api/v1/edit-info', payload);
        return res.data;
    },

    logout: () => {
        TokenService.removeToken();
        ApiService.removeHeader();
    },

};

export default AuthService;

