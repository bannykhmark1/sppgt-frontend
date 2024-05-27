import { observer } from "mobx-react-lite";
import NavBar from "../components/NavBar";
import React from 'react';
import Footer from '../components/Footer';

const Delivery = observer(() => {
    return (
        <>
            <div className='flex flex-col min-h-screen'>
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
                                <li>Зона 1: Бесплатно (до 5 км от центра)</li>
                                <li>Зона 2: 500 рублей (от 5 до 10 км)</li>
                                <li>Зона 3: 1000 рублей (от 10 до 20 км)</li>
                                <li>Зона 4: 1500 рублей (более 20 км)</li>
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
