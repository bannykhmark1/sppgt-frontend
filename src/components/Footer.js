import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-gray-800 py-6 mt-10">
      <div className="container mx-auto flex justify-between items-start">
        <nav className="flex flex-col space-y-2">
          <a href="#" className="hover:underline">Главная</a>
          <a href="#" className="hover:underline">О нас</a>
          <a href="#" className="hover:underline">Каталог</a>
          <a href="#" className="hover:underline">Доставка и стоимость</a>
          <a href="#" className="hover:underline">Статьи</a>
          <a href="#" className="hover:underline">Контакты</a>
        </nav>
        <div className="text-right">
          <p className="font-bold">Контакты для связи</p>
          <p>265456, Свердловская область, г. Березовский, поселок Монетный</p>
          <p>+790465896145</p>
          <p>+790465896145</p>
          <p>+790465896145</p>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="bg-gray-700 text-yellow-500 py-1 text-xl px-3 rounded-full">АО СППЖТ</span>
      </div>
    </footer>
  );
};

export default Footer;