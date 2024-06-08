import React, { useContext, useEffect, useCallback } from 'react';

import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchProducts, fetchTypes } from "../http/productAPI";

import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

const ToShareholders = observer(() => {
    const { user } = useContext(Context);
    const { product } = useContext(Context);
   

    const setTypes = useCallback((types) => {
        product.setTypes(types);
    }, [product]);

    const setProducts = useCallback((data) => {
        product.setProducts(data.rows);
        product.setTotalCount(data.count);
    }, [product]);

    useEffect(() => {
        const restoreAuth = async () => {
            try {
                await user.restoreAuth(); // Восстанавливаем авторизацию при загрузке
            } catch (error) {
                console.error('Ошибка при восстановлении авторизации', error);
            }
        };

        restoreAuth();

        fetchTypes().then(data => setTypes(data));
        fetchProducts(null, null, 1, 24).then(data => setProducts(data));
    }, [setTypes, setProducts, user]);

    return (
        <>
            <NavBar />
            <div className="flex flex-col min-h-screen justify-between">
                <div className="container mx-auto px-4 py-8 flex-grow">
                    <h1 className="mt-[80px] text-4xl font-bold text-yellow-800 mb-6 text-center">
                        Акционерам
                    </h1>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <ul className="list-disc list-inside mb-6">
                            <li className="mb-4">
                                Сообщение о проведении очередного общего годового собрания в АО &quot;Свердловское предприятия промышленного железнодорожного транспорта&quot; собрания в заочной форме
                            </li>
                            <li className="mb-4">
                                16.05.2022 состоится очередное годовое собрание акционеров.
                                Адрес: г. Екатеринбург, ул. Декабристов, д. 14 (офис 217).
                                Регистрация в 10-45. Начало в 11 часов местного времени.
                            </li>
                            <li className="mb-4">
                                23.06.2021г. В 11-00 (регистрация в 10-45) состоится очередное годовое собрание акционеров АО &quot;СППЖТ&quot;.
                                Адрес проведения - г. Екатеринбург, ул.Декабристов 14, офис 217.
                            </li>
                            <li className="mb-4">
                                С реестром акционеров и повесткой дня собрания для ознакомления можно ознакомится в офисе АО &quot;СППЖТ&quot; п. Монетный, ул. Комсомольская 8а с 9-00 до 12-00.
                            </li>
                            <li className="mb-4">
                                Вопросы по тел. 89043888005 - директор АО СППЖТ Присягина А.Г.
                            </li>
                            <li className="mb-4">
                                11 сентября 2020 года в 11-00 состоится очередное годовое собрание по итогам 2019 года. Адрес проведения: г. Екатеринбург, ул. Декабристов- 14, офис 217. С реестром акционеров, имеющих право на участие в собрании и повесткой собрания можноознакомиться в офисе АО &quot;СППЖТ&quot; по адресу: п. Монетный, ул. Комсомольская 8а с 9-00 до 12-00. Все вопросы по тел. 89043888005 директор АО &quot;СППЖТ&quot; в рабочее время.
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
});

export default ToShareholders;