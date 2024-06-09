import React from 'react';
import { Link } from 'react-router-dom';
import { SHOP_ROUTE, DELIVERY_ROUTE, APP_ROUTE, CONTACTS_ROUTE, REVIEW_ROUTE, TOSHAREHOLDERS_ROUTE } from "../utils/consts";

const Footer = () => {
  return (
    <footer className="md:px-0 px-4 bottom-0 w-screen bg-yellow-400 text-gray-800 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <nav className="flex flex-col space-y-2">
          <Link to={APP_ROUTE} className="hover:underline">Главная</Link>
          <Link to={SHOP_ROUTE} className="hover:underline">Каталог</Link>
          <Link to={DELIVERY_ROUTE} className="hover:underline">Доставка и стоимость</Link>
          <Link to={TOSHAREHOLDERS_ROUTE} className="hover:underline">Акционерам</Link>
          <Link to={CONTACTS_ROUTE} className="hover:underline">Контакты</Link>
          <Link to={REVIEW_ROUTE} className="hover:underline">Отзывы</Link>
        </nav>
        <div className="mt-6 md:mt-0 text-right">
          <p className="font-bold">Контакты для связи</p>
          <p>623720, Свердловская область, г. Березовский, поселок Монетный</p>
          <p>+79043897781</p>
          <p>+79193781165</p>
          <p>+79043888005</p>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Link to={APP_ROUTE}>
          <h2 className="text-2xl font-bold md:mr-36 text-gray-700 bg-yellow-500 px-3 py-1 rounded-full">АО СППЖТ</h2>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
