import { jwtDecode } from 'jwt-decode';
import axiosInstance from '../axios/axiosInstance.js';

export const setToken = (token) => {
    localStorage.setItem('token', token)
};

export const getToken = () => {
    const token = localStorage.getItem('token');
    if(token){
        return token;
    }
    return null;
}

export const login = async (dataDNI, dataPassword) => {
    try {
        const formData = new URLSearchParams();
        formData.append('username', parseInt(dataDNI, 10));
        formData.append('password', dataPassword);

        const response = await axiosInstance.post('/login', formData);
        return response?.data?.access_token
        
    } catch (error) {
        console.error("Error logging in:", error);
    }
};

export const getUserEmail = () => {
    const token = getToken();
    if(token){
        const payLoad = jwtDecode(token);
        return payLoad?.email
    }

    return null
}

export const getUserRole = () => {
    const token = getToken();
    if(token){
        const payLoad = jwtDecode(token);
        return payLoad?.admin
    }

    return null
}

export const isLoggedIn = () => {
    const token = getToken();

    if(token){
        // const payLoad = jwtDecode(token);
        // const isLogin = Date.now() < payLoad.exp * 1000;
        return true;
    }
    return false
}

export const logOut = () => {
    localStorage.clear();
}
