import React, { useContext, useEffect, useCallback } from 'react';
import TypeBar from "../components/TypeBar";
import ProductList from "../components/ProductList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchProducts, fetchTypes } from "../http/productAPI";
import Pages from "../components/Pages";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

const Contacts = observer(() => {

    return (
        <>
            <NavBar />
            <div>
                <div className='container mx-auto'>

                    ОАО "Свердловское предприятие промышленного железнодорожного транспорта"

                    623720, Свердловская обл., пос. Монетный, ул. Комсомольская, 8

                    ОАО "Свердловское ППЖТ"

                    тел-факс: (34369) 34160,
                    (34369) 34913

                    Генеральный директор Присягин Г.П.
                </div>
            </div>
            <Footer />
        </>
    );
});

export default Contacts;