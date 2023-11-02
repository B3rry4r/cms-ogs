import axios from "axios";

// export const url = 'http://localhost:5000';
export const url = 'https://ogs-backend.onrender.com';

export const authAxios = axios.create({
    baseURL: url
});

authAxios.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))?.token}`
    }
    return req
})
