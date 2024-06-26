import { PRODUCT_ROUTE } from '../utils/consts';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import star from '../assets/star.png';

const ProductItem = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full  sm:w-60 m-3 cursor-pointer" onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
            <div className="border border-light rounded hover:shadow-lg overflow-hidden">
                <img
                    className="w-full h-48 object-cover"
                    src={process.env.REACT_APP_API_URL + "/" + product.img}
                    alt={product.name}
                />
                <div className="text-black-50 mt-1 flex justify-between items-center px-2 pt-2">
                    <div></div>
                    <div className="flex items-center">
                        <div>{product.rating}</div>
                        <Image width={18} height={18} src={star} />
                    </div>
                </div>
                <div className="px-2 py-2">{product.name}</div>
                <div className="px-2 py-2">{product.price + " ₽"}</div>
            </div>
        </div>
    );
};

export default ProductItem;