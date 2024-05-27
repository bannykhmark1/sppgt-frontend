import React from "react";
import { LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, DELIVERY_ROUTE, APP_ROUTE, CONTACTS_ROUTE, REVIEW_ROUTE } from "../utils/consts";
import { Link } from "react-router-dom";

export default function Drovishki() {
    return (
        <div className="flex w-screen flex-col md:mt-[80px] mt-[64px]">
            <div className="container">
                <div className="text-orange-200 container bg-center bg-cover flex flex-col justify-start items-center">
                    <div className="bg-[url('bg-company.jpg')] md:py-20 py-10 bg-center bg-cover h-full md:w-screen items-center mt-0 shadow-lg flex flex-col justify-center ">
                        <h1 className="text-6xl font-extrabold pb-8 text-center">
                            АО СППЖТ
                        </h1>
                        <p className="text-md md:text-lg lg:text-xl text-center mb-8">
                            Продажа качественных пиломатериалов для строительства и ремонта
                        </p>
                        <button className="flex justify-center items-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                            <span className="mr-3"> <Link to={SHOP_ROUTE}>Посмотреть товары</Link></span>
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18m-6 6l6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>


                <div className="mx-auto mt-10 px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Что мы предлагаем</h2>
                    <div className="flex flex-wrap -mx-4 justify-center">
                        <div className="md:w-1/3 px-4 mb-8 w-full">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img className="w-full p-9 object-cover" src="quality.png" alt="Пиломатериалы" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">Качественные пиломатериалы</h3>
                                    <p className="text-gray-600">
                                        Мы предлагаем вам только качественные пиломатериалы, устойчивые к износу и погодным условиям.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 px-4 mb-8 w-full">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img className="p-9 w-full object-cover" src="flexbility.svg" alt="гибкость" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">Гибкие условия</h3>
                                    <p className="text-gray-600">
                                        Мы предлагаем гибкие условия сотрудничества, которые подойдут для любых ваших нужд.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 px-4 mb-8 w-full">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img className="w-full p-9 object-cover" src="speed.png" alt="Быстрая доставка" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">Быстрая доставка</h3>
                                    <p className="text-gray-600">
                                        Наша компания гарантирует быстрату и надежную доставку продукции к вашему объекту.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}