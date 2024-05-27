import React, { useContext, useState } from "react";
import '../../src/index.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Context } from "../index";
import Modal from "../components/modalSink";
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, DELIVERY_ROUTE, APP_ROUTE, CONTACTS_ROUTE, REVIEW_ROUTE } from "../utils/consts";

export default function Header() {
  const { user } = useContext(Context);
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
    <>
    <NavBar />
    <div className="flex flex-col mt-[80px] min-h-screen">
        <div className="flex-grow container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-yellow-800 mb-6 text-center">
                Контактная информация
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg mb-4">
                    <span className="font-semibold">ОАО "Свердловское предприятие промышленного железнодорожного транспорта"</span>
                </p>
                <p className="text-lg mb-4">
                    <span className="font-semibold">Адрес:</span> 623720, Свердловская обл., пос. Монетный, ул. Комсомольская, 8
                </p>
                <p className="text-lg mb-4">
                    <span className="font-semibold">Название компании:</span> ОАО "Свердловское ППЖТ"
                </p>
                <p className="text-lg mb-4">
                    <span className="font-semibold">Телефон/Факс:</span> (34369) 34160, (34369) 34913
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Генеральный директор:</span> Присягин Г.П.
                </p>
            </div>
        </div>
        <Footer />
    </div>
</>
    );
  }