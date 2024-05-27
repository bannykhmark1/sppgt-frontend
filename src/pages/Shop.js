import React, { useContext, useEffect, useCallback, useState } from 'react';
import TypeBar from "../components/TypeBar";
import ProductList from "../components/ProductList";
import PriceFilter from "../components/PriceFilter";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchProducts, fetchTypes } from "../http/productAPI";
import Pages from "../components/Pages";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

const Shop = observer(() => {
    const { user } = useContext(Context);
    const { product } = useContext(Context);
    const [priceFilter, setPriceFilter] = useState({ minPrice: '', maxPrice: '' });

    const setTypes = useCallback((types) => {product.setTypes(types);
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

    useEffect(() => {
        const { minPrice, maxPrice } = priceFilter;
        const fetchFilteredProducts = async () => {
            const data = await fetchProducts(product.selectedType.id, product.page, 24, minPrice, maxPrice);
            setProducts(data);
        };

        fetchFilteredProducts();
    }, [product.page, product.selectedType, priceFilter, setProducts]);

    const handlePriceFilterChange = (filter) => {
        setPriceFilter(filter);
    };

    return (
        <>
            <NavBar />
            <div className="flex flex-col min-h-screen bg-cover bg-center bg-yellow-50">
                <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row bg-white bg-opacity-90 rounded-lg shadow-2xl mt-16">
                    <div className="w-full md:w-1/4 p-5 border-b md:border-b-0 md:border-r border-gray-300">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-gray-800">Категории</h2>
                        <TypeBar />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-gray-800 mt-10">Фильтры</h2>
                        <PriceFilter onFilterChange={handlePriceFilterChange} />
                    </div>
                    <div className="w-full md:w-3/4 p-5 flex flex-col">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-gray-800">Ассортимент</h2>
                        <ProductList />
                    </div>
                </div>
                <div className="container mx-auto py-5 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-90 shadow-2xl mt-5">
                    <div className="flex justify-center">
                        <Pages />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
});

export default Shop;