import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Новое состояние для имени пользователя

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password, name); // Передаем имя пользователя
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (e) {
            if (e.response && e.response.data && e.response.data.message) {
                alert(e.response.data.message);
            } else {
                console.error(e); // как альтернатива вы можете здесь использовать console.log
            }
        }
    };

    return (
        <div className='flex flex-col justify-between h-screen'>
            <NavBar />
            <div className="flex items-center justify-center h-screen -mt-16">
                <div className="w-96 p-5 border rounded">
                    <h2 className="text-center">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                    <div className="mt-3 space-y-2">
                        {!isLogin && (
                            <input
                                className="w-full p-2 border rounded"
                                placeholder="Введите ваше имя..."
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        )}
                        <input
                            className="w-full p-2 border rounded"
                            placeholder="Введите ваш email..."
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className="w-full p-2 border rounded"
                            placeholder="Введите ваш пароль..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        <div className="flex items-center justify-between mt-3">
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                </div>
                            }
                            <button
                                className="px-4 py-2 text-white bg-green-500 rounded"
                                onClick={click}>
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
});

export default Auth;