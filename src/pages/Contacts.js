import React, { useContext, useState, useEffect } from "react";
import '../../src/index.css';
import { observer } from "mobx-react-lite";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Context } from "../index";
import { login, registration,check } from "../http/userAPI";
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, DELIVERY_ROUTE, APP_ROUTE, CONTACTS_ROUTE, REVIEW_ROUTE } from "../utils/consts";

const Contacts = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

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
    <div className="flex flex-col mt-16 min-h-screen">
        <div className="flex-grow container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-yellow-800 mb-8 text-center">
                Контактная информация
            </h1>
            <div className="bg-white flex flex-col md:flex-row p-6 rounded-lg shadow-lg">
                <div className="md:w-1/2">
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
                <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
                    <iframe src="https://yandex.ru/map-widget/v1/org/sverdlovskoye_predpriyatiye_promyshlennogo_zheleznodorozhnogo_transporta/1079962598/?ll=60.879532%2C57.057396&source=serp_navig&z=17.26" width="100%" height="400" className="shadow-2xl rounded-sm" frameborder="0" allowfullscreen="true"></iframe>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </>
  );
});

export default Contacts;
