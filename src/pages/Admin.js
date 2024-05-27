import React, { useContext, useEffect, useState } from 'react';
import CreateProduct from '../components/modals/CreateProduct';
import CreateType from '../components/modals/CreateType';
import { Context } from '../index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { check } from '../http/userAPI';

const Admin = () => {
  const { user } = useContext(Context);
  const [typeVisible, setTypeVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);

  useEffect(() => {
    const restoreAuthState = async () => {
      try {
        await user.restoreAuth();
        const userData = await check();
        if (userData) {
          user.setUser(userData);
          user.setIsAuth(true);
        } else {
          user.setIsAuth(false);
        }
      } catch (err) {
        console.error('Ошибка при проверке пользователя', err);
        user.setIsAuth(false); // Сбрасываем состояние авторизации в случае ошибки
      }
    };

    restoreAuthState();
  }, [user]);

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <NavBar />
        <div className="flex flex-col items-center justify-center flex-grow mt-4 space-y-4">
          <button
            className="bg-orange-500 text-white text-2xl font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 w-64 text-center"
            onClick={() => setTypeVisible(true)}
          >
            Добавить тип
          </button>
          <button
            className="bg-yellow-500 text-white text-2xl font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 w-64 text-center"
            onClick={() => setProductVisible(true)}
          >
            Добавить продукт
          </button>
          <CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />
          <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Admin;