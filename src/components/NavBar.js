import React from "react";
import { useContext } from 'react';
import '../../src/index.css';
import Nav from "react-bootstrap/Nav";
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "./modalSink";
import { LOGIN_ROUTE, SHOP_ROUTE, PRODUCT_ROUTE, ADMIN_ROUTE } from "../utils/consts";
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {


  const { user } = useContext(Context)
  const navigate = useNavigate()

  console.log(user)

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    console.log(user.IsAuth)
  }
  function goToLoginPage() {
    navigate(LOGIN_ROUTE);
  }

  const goToAdminPanel = () => {
    navigate(ADMIN_ROUTE);  // Используем navigate для перехода на админ панель
  };

  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mb-24">
      <nav className="bg-yellow-400 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">АО СППЖТ</span>
          </NavLink>
          <div className="hidden md:flex md:items-center md:justify-between md:space-x-4">
            <NavLink to={SHOP_ROUTE} className="text-black px-3 py-2 rounded-md text-sm font-medium"><p className="hover:text-orange-600">Главная</p></NavLink>
            <NavLink className="text-black px-3 py-2 rounded-md text-sm font-medium"><p className="hover:text-orange-600">О нас</p></NavLink>
            <NavLink to={SHOP_ROUTE} className="text-black px-3 py-2 rounded-md text-sm font-medium"><p className="hover:text-orange-600">Каталог</p></NavLink>
            <NavLink to="#" className="text-black px-3 py-2 rounded-md text-sm font-medium"><p className="hover:text-orange-600">Доставка и стоимость</p></NavLink>
            <NavLink to="#" className="text-black px-3 py-2 rounded-md text-sm font-medium"><p className="hover:text-orange-600">Статьи</p></NavLink>
            <NavLink to="/contacts" className="text-black px-3 py-2 rounded-md text-sm font-medium"><p className="hover:text-orange-600">Контакты</p></NavLink>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white mr-5 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              Заказать звонок
            </button>

            {user.isAuth ?
              <Nav className="ml-auto" style={{ color: 'white' }}>
                <button
                  variant={"outline-light"}
                  onClick={goToAdminPanel}
                >
                  Админ панель
                </button>
                <button
                  variant={"outline-light"}
                  onClick={() => logOut()}
                  className="ml-2"
                >
                  Выйти
                </button>

                <p>{user.IsAuth}</p>
                

              </Nav>
              :

              <button
                type="button"
                className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                onClick={goToLoginPage}
              >
                <NavLink to={LOGIN_ROUTE}>Авторизация</NavLink>
              </button>

            }
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-500 rounded-lg md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="items-center w-full md:flex md:w-auto md:order-1 mt-4 md:mt-0 md:border-0 md:bg-yellow-400 bg-yellow-400 md:bg-yellow-400">
              <ul className="flex flex-col p-4 md:p-0 font-medium bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row rounded">
                <li>
                  <NavLink
                    to="#"
                    className="block py-2 px-3 hover:bg-gray-100 text-black rounded md:bg-transparent md:text-orange-700 md:p-0 md:dark:text-orange-500"
                    aria-current="page"
                  >
                    Главная
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block py-2 px-3 hover:bg-gray-100 text-black rounded md:bg-transparent md:text-orange-700 md:p-0 md:dark:text-orange-500"
                    aria-current="page"
                  >
                    О нас
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block py-2 px-3 hover:bg-gray-100 text-black rounded md:bg-transparent md:text-orange-700 md:p-0 md:dark:text-orange-500"
                    aria-current="page"
                  >
                    Каталог
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 orange"
                  >
                    Доставка и стоимость
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 orange"


                  >
                    Статьи
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 orange"
                  >
                    Контакты
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header >
  );
}
