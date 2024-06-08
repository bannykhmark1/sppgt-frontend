import React, { useContext, useEffect } from "react";
import '../../src/index.css';
import { observer } from "mobx-react-lite";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Context } from "../index";
import { check } from "../http/userAPI";

const Contacts = observer(() => {
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
      });
  
  }, [user]);

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
                <span className="font-semibold">ОАО &quot;Свердловское предприятие промышленного железнодорожного транспорта&quot;</span>
              </p>
              <p className="text-lg mb-4">
                <span className="font-semibold">Адрес:</span> 623720, Свердловская обл., пос. Монетный, ул. Комсомольская, 8
              </p>
              <p className="text-lg mb-4">
                <span className="font-semibold">Название компании:</span> ОАО &quot;Свердловское ППЖТ&quot;
              </p>
              <p className="text-lg mb-4">
                <span className="font-semibold">Телефон/Факс:</span> (34369) 34160, (34369) 34913
              </p>
              <p className="text-lg">
                <span className="font-semibold">Генеральный директор:</span> Присягин Г.П.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
              <iframe 
                src="https://yandex.ru/map-widget/v1/org/sverdlovskoye_predpriyatiye_promyshlennogo_zheleznodorozhnogo_transporta/1079962598/?ll=60.879532%2C57.057396&source=serp_navig&z=17.26" 
                width="100%" 
                height="400" 
                className="shadow-2xl rounded-sm" 
                frameBorder="0" 
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
});

export default Contacts;