import React from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTE } from '../utils/consts';

const Footer = () => {
  return (
    <footer className="md:px-0 px-4 bottom-0 w-screen bg-yellow-400 text-gray-800 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <nav className="flex flex-col space-y-2">
          <a href="#" className="hover:underline">Главная</a>
          <a href="#" className="hover:underline">О нас</a>
          <a href="#" className="hover:underline">Каталог</a>
          <a href="#" className="hover:underline">Доставка и стоимость</a>
          <a href="#" className="hover:underline">Статьи</a>
          <a href="#" className="hover:underline">Контакты</a>
        </nav>
        <div className="mt-6 md:mt-0 text-right">
          <p className="font-bold">Контакты для связи</p>
          <p>265456, Свердловская область, г. Березовский, поселок Монетный</p>
          <p>+790465896145</p>
          <p>+790465896145</p>
          <p>+790465896145</p>
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

