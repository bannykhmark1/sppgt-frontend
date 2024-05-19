import React, { useContext, useEffect, useCallback } from 'react';
import TypeBar from "../components/TypeBar";
import ProductList from "../components/ProductList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchProducts, fetchTypes } from "../http/productAPI";
import Pages from "../components/Pages";
import Navbar from "../components/NavBar";

const Shop = observer(() => {
    const { product } = useContext(Context);

    const setTypes = useCallback((types) => {
        product.setTypes(types);
    }, [product]);

    const setProducts = useCallback((data) => {
        product.setProducts(data.rows);
        product.setTotalCount(data.count);
    }, [product]);

    useEffect(() => {
        fetchTypes().then(data => setTypes(data));
        fetchProducts(null, null, 1, 24).then(data => setProducts(data));
    }, [setTypes, setProducts]);

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.page, 24).then(data => setProducts(data));
    }, [product.page, product.selectedType, setProducts]);

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-5">
                <div className="flex">
                    <div className="w-3/12">
                        <TypeBar />
                    </div>
                    <div className="w-9/12 ml-5">
                        <ProductList />
                        <Pages />
                    </div>
                </div>
            </div>
        </>
    );
});

export default Shop;
