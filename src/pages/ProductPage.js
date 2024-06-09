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
        // дополнительная логика после отправки формы
    };

    return (
        <div className="flex flex-col md:mt-24 min-h-screen">
            <NavBar />
            <div className="flex-grow container mx-auto flex flex-col items-center justify-center py-12">
                <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex flex-wrap justify-center md:justify-between items-start">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <img
                                className="w-full h-auto object-cover rounded-lg shadow-md"
                                src={process.env.REACT_APP_API_URL + product.img}
                                alt={product.name}
                            />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-black-600 mb-3">{product.name}</h2>
                       
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">От: {product.price} руб.</h3>
                            </div>
                            <button
                                onClick={() => setIsOrderModalOpen(true)}
                                className="mt-6 md:mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
                            >
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-2xl font-bold text-orange-600 mb-4">Описание</h1>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            {product.info.map((info) => (
                                <div key={info.id} className="py-2 border-b border-gray-200 last:border-b-0">
                                    <span className="font-semibold text-gray-700">{info.title}</span>: {info.description}
                                </div>
                            ))}
                        </div>
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