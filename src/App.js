import "../src/index.css";
import NavBar from "../src/components/NavBar";
import { useContext, useEffect, useState } from 'react';
import { Context } from "./index";
import React from "react";
import { Spinner } from "react-bootstrap";
import Footer from "./components/Footer";
import { check } from "./http/userAPI";
import About from "./components/About";
import Company from "./components/Company";

function App() {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

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
      .finally(() => setLoading(false));
  }, [user, loading]); // Добавляем loading в зависимости

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner animation={"grow"} />
      </div>
    );
  }
  return (
    <>
    <div className=" overflow-hidden">
      <NavBar />
      <div className="container mx-auto ">
        <Company />
        <About />
      </div>
      <Footer />
      </div>
    </>
  );
}

export default App;
