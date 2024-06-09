import { observer } from "mobx-react-lite";
import NavBar from "../components/NavBar";
import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import { check } from "../http/userAPI";
import { Context } from "../index";

const Delivery = observer(() => {
    const { user } = useContext(Context);
  
    useEffect(() => {
        user.restoreAuth(); // Восстанавливаем авторизацию при загрузке
        console.log('Restored Auth State:', user.isAuth);
        check()
            .then(userData => {
                if (userData) {
                    user.setUser(userData);
                }
            })
            .catch(err => {
                console.error('Ошибка при проверке пользователя', err);
                // Здесь можно обработать ошибку, если нужно, например, показав уведомление пользователю
            })
    }, [user]);

    return (
        <>
            <div className='flex mt-20 flex-col min-h-screen'>
                <NavBar />
                <div className="flex-grow flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl w-full space-y-8">
                        <h1 className="text-3xl font-extrabold text-center text-gray-900">Зоны Доставки и Их Стоимость</h1>
                        <p className="text-center text-gray-700">
                            Ниже представлена карта с обозначенными зонами доставки. Каждая зона имеет свою стоимость доставки. 
                            Пожалуйста, используйте карту для определения вашей зоны и соответствующей стоимости.
                        </p>
                        <div className="relative w-full h-0 pb-[80%] sm:pb-[60%] lg:pb-[50%] overflow-hidden rounded-lg shadow-lg my-10">
                            <iframe 
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3A5cfa30580e073ab81dba39dba92fe290c029a022522a0047867c96a412874513&amp;source=constructor" 
                                className="absolute top-0 left-0 w-full h-full border-none"
                                allowFullScreen
                            />
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-bold text-gray-900">Стоимость Доставки</h2>
                            <ul className="mt-4 space-y-2 text-gray-700">
                                <li><span className="inline-block w-3 h-3 mr-2 rounded-full bg-red-600"></span>Зона 1: 1000 рублей (до 10 км от базы)</li>
                                <li><span className="inline-block w-3 h-3 mr-2 rounded-full bg-blue-600"></span>Зона 2: 1500 рублей (от 10 до 20 км от базы)</li>
                                <li><span className="inline-block w-3 h-3 mr-2 rounded-full bg-orange-600"></span>Зона 3: 2000 рублей (от 20 до 40 км от базы)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
});

export default Delivery;
