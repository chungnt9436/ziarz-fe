import {ApiService} from "./apiService";

const SessionService = {
    list: async (payload) => {
        ApiService.setHeader();
        let $params = new URLSearchParams(payload).toString();
        let res = await ApiService.get('/api/v1/sessions?' + $params);
        return res.data;
    },
    create: async (payload) => {
        ApiService.setHeader();
        let res = await ApiService.post('/api/v1/session', payload);
        return res.data;
    },
    join: async (payload) => {
        ApiService.setHeader();
        let res = await ApiService.post('/api/v1/session/join', payload);
        return res.data;
    },


};
export default SessionService;

