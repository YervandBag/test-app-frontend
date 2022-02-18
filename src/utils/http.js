import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000'
});

// http.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');

http.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config;
    }
)

export default http
