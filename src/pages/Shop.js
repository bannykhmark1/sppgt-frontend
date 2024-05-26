import React, { useContext, useEffect, useCallback } from 'react';
import TypeBar from "../components/TypeBar";
import ProductList from "../components/ProductList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchProducts, fetchTypes } from "../http/productAPI";
import Pages from "../components/Pages";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

const Shop = observer(() => {

    const { user } = useContext(Context)
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

        restoreAuth()

        fetchTypes().then(data => setTypes(data));
        fetchProducts(null, null, 1, 24).then(data => setProducts(data));
    }, [setTypes, setProducts]);
    useEffect(() => {
        fetchProducts(product.selectedType.id, product.page, 24).then(data => setProducts(data));
    }, [product.page, product.selectedType, setProducts]);

    return (
        <>
            <NavBar />
            <div className="flex flex-col bg-cover bg-center min-h-screen">
                <div className="flex flex-grow container mx-auto py-10 px-6 bg-white bg-opacity-90 rounded-lg shadow-2xl mt-16">
                    <div className="w-1/4 p-5 border-r border-gray-300">
                        <h2 className="text-4xl font-bold mb-5 text-gray-800">Категории</h2>
                        <TypeBar />
                    </div>
                    <div className="w-3/4 p-5">
                        <h2 className="text-4xl font-bold mb-5 text-gray-800">Ассортимент</h2>
                        <div className="flex flex-col space-y-5">
                            <ProductList />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto py-5 bg-white bg-opacity-90 shadow-2xl">
                    <div className="container mx-auto flex justify-center">
                        <Pages />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
});

export default Shop;