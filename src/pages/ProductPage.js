import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../http/productAPI';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Modal from '../components/Modal';
import OrderForm from '../components/OrderForm';

const ProductPage = () => {
    const [product, setProduct] = useState({ info: [] });
    const { id } = useParams();
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    useEffect(() => {
        fetchOneProduct(id).then((data) => setProduct(data));
    }, [id]);

    const handleOrderSubmit = (orderDetails) => {
        console.log('Order details:', orderDetails);
    };

    return (
        <div className="flex flex-col min-h-screen bg-yellow-50">
            <NavBar />
            <div className="flex-grow container mx-auto mt-5 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap -mx items-start">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <img
                            className="w-full h-96 object-cover rounded-lg shadow-lg"
                            src={process.env.REACT_APP_API_URL + product.img}
                            alt={product.name}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
                            <div>
                                <h2 className="text-3xl font-bold text-yellow-800 mb-3">{product.name}</h2>
                                <div className="flex items-center mb-3">
                                    <span className="text-yellow-400 text-xl">{product.rating} ★</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">От: {product.price} руб.</h3>
                            </div>
                            <button
                                onClick={() => setIsOrderModalOpen(true)}
                                className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                            >
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                </div>
                <div className="my-6">
                    <h1 className="text-3xl font-bold text-yellow-800 mb-4">Описание</h1>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        {product.info.map((info) => (
                            <div key={info.id} className="py-2 border-b border-gray-200">
                                <span className="font-semibold">{info.title}</span>: {info.description}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            <Modal show={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)}>
                <OrderForm
                    product={product}
                    onSubmit={handleOrderSubmit}
                    onClose={() => setIsOrderModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default ProductPage;
