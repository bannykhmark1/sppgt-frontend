import React, { useContext, useState } from "react";
import '../../src/index.css';
import { Context } from "../index";
import Modal from "../components/modalSink";
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, DELIVERY_ROUTE, APP_ROUTE, CONTACTS_ROUTE, REVIEW_ROUTE, TOSHAREHOLDERS_ROUTE } from "../utils/consts";

export default function Header() {
  const { user } = useContext(Context);
  console.log(user.user.role);
  const navigate = useNavigate();
  const logOut = () => {
    user.logout();
    navigate(APP_ROUTE);
  };

  const goToLoginPage = () => {
    navigate(LOGIN_ROUTE);
  };

  const goToAdminPanel = () => {
    navigate(ADMIN_ROUTE);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed mb-24 top-0 z-10 w-full">
      <nav className="w-full bg-yellow-400 shadow fixed z-20">
        <div className="justify-around container mx-auto px-4 md:px-0 md:items-center md:flex">
          <div className="flex items-center justify-between py-3 md:py-5">
            <Link to={APP_ROUTE}>
              <h2 className="text-2xl font-bold md:mr-36 text-gray-700 bg-yellow-500 px-3 py-1 rounded-full">АО СППЖТ</h2>
            </Link>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border">
                {menuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className={`container flex-1 justify-around pb-3 mt-8 md:block md:pb-0 md:mt-0 ${menuOpen ? "block" : "hidden"}`}>
            <ul className="items-center justify-between space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black hover:text-orange-600">
                <Link to={APP_ROUTE}>Главная</Link>
              </li>
              <li className="text-black hover:text-orange-600">
                <Link to={SHOP_ROUTE}>Каталог</Link>
              </li>
              <li className="text-black hover:text-orange-600">
                <Link to={DELIVERY_ROUTE}>Доставка и стоимость</Link>
              </li>
              <li className="text-black hover:text-orange-600">
                <Link to={TOSHAREHOLDERS_ROUTE}>Акционерам</Link>
              </li>
              <li className="text-black hover:text-orange-600">
                <Link to={CONTACTS_ROUTE}>Контакты</Link>
              </li>
              <li className="text-black hover:text-orange-600">
                <Link to={REVIEW_ROUTE}>Отзывы</Link>
              </li>
              <li className="text-black hover:text-orange-600 mt-3 md:mt-0">
                <button
                  type="button"
                  className="text-white bg-orange-500 font-medium hover:bg-orange-600 rounded-lg text-sm px-4 py-2 w-full md:w-auto"
                  onClick={() => setIsOpen(true)}
                >
                  Заказать звонок
                </button>
              </li>
              {user.isAuth ? (
                <>
                  {user.user.role === 'ADMIN' && (
                    <li className="text-black hover:text-orange-600 mt-3 md:mt-0">
                      <button
                        className="text-white bg-orange-500 font-medium hover:bg-orange-600 rounded-lg text-sm px-4 py-2 w-full md:w-auto"
                        onClick={goToAdminPanel}
                      >
                        Админ панель
                      </button>
                    </li>
                  )}
                  <li className="text-black hover:text-orange-600 mt-3 md:mt-0">
                    <button
                      className="text-white bg-orange-500 font-medium hover:bg-orange-600 rounded-lg text-sm px-4 py-2 w-full md:w-auto"
                      onClick={logOut}
                    >
                      Выйти
                    </button>
                  </li>
                </>
              ) : (
                <li className="text-black hover:text-orange-600 mt-3 md:mt-0">
                  <button
                    className="text-white bg-orange-500 font-medium hover:bg-orange-600 rounded-lg text-sm px-4 py-2 w-full md:w-auto"
                    onClick={goToLoginPage}
                  >
                    Авторизация
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </header>
  );
}
