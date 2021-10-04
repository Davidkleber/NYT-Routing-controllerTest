import axios from "axios";

const api = axios.create ({
    baseURL: 'http://localhost:4000/?section=technology',
    headers: {
        'Access-Control-Allow-Origin': true,
    }
});

export default api;