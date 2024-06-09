import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ product, onSubmit, onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const orderDetails = { name, phone, address, product };

        axios.post('http://45.146.165.154:5000/send', orderDetails)
            .then(response => {
                console.log('Email sent:', response.data);
                setSuccessMessage('Спасибо за заказ, скоро с вами свяжутся, ожидайте.');
                onSubmit(orderDetails);
            })
            .catch(error => {
                console.error('There was an error sending the email:', error);
            });
    };

    return (
        <div>
            {successMessage ? (
                <div className="flex justify-center p-4 text-sm items-center text-center align-center text-green-700 rounded-lg" role="alert">
                    {successMessage}
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-2xl mb-4">Оформление заказа на {product.name}</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Имя</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Ваше имя"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Телефон</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Ваш номер телефона"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Адрес</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Ваш адрес"
                            required
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-red-500 text-white rounded-md"
                        >
                            Отмена
                        </button><button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded-md"
                        >
                            Заказать
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default OrderForm;