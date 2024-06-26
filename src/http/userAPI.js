import { $authHost, $host } from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async (email, password, name) => {
    const { data } = await $host.post('api/user/registration', { email, password, name, role: 'public' });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
};

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
};

export const check = async () => {
    const { data } = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
};

export const sendResetPasswordEmail = async (email) => {
    const { data } = await $host.post('api/user/requestPasswordReset', { email });
    return data;
};

export const resetPassword = async (token, password) => {
    try {
        console.log(`Отправка запроса на сброс пароля с токеном: ${token} и новым паролем: ${password}`);
        const { data } = await $host.post('api/user/resetPassword', { token, newPassword: password });
        console.log(`Ответ от сервера при сбросе пароля: ${data}`);
        return data;
    } catch (error) {
        console.error('Ошибка при отправке запроса на сброс пароля:', error.response?.data || error.message);
        throw error;
    }
};
