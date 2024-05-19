import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchOneProduct} from "../http/productAPI";

const ProductPage = () => {
    const [product, setProduct] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])

    return (
        <div className="container mx-auto mt-3">
            <div className="flex flex-wrap -mx-2">
                <div className="w-1/3 px-2">
                    <img className="w-full h-64 object-contain" src={process.env.REACT_APP_API_URL + product.img} />
                </div>
                <div className="w-1/3 px-2 flex flex-col justify-center items-center">
                    <h2 className="text-2xl">{product.name}</h2>
                    <div 
                        className="flex items-center justify-center mt-2"
                    >
                        {product.rating}
                    </div>
                </div>
                <div className="w-1/3 px-2 flex items-center">
                    <div className="flex flex-col items-center justify-between w-full h-64 py-4 px-8 border-2 border-gray-200 text-2xl">
                        <h3>От: {product.price} руб.</h3>
                        <button className="px-4 py-2 border border-black">Добавить в корзину</button>
                    </div>
                </div>
            </div>
            <div className="my-3">
                <h1 className="text-2xl">Характеристики</h1>
                {product.info.map((info, index) =>
                    <div key={info.id} className="py-2">
                        {info.title}: {info.description}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
