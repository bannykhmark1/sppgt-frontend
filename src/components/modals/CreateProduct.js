import React, { useContext, useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogDescription } from '@headlessui/react';
import { Context } from '../../index';
import { createProduct, fetchTypes } from '../../http/productAPI';
import { observer } from 'mobx-react-lite';

const CreateProduct = observer(({ show, onHide }) => {
    const { product } = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        fetchTypes().then((data) => product.setTypes(data));
    }, [product]);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number));
    };

    const changeInfo = (key, value, number) => {
        setInfo(
            info.map((i) =>
                i.number === number ? { ...i, [key]: value } : i
            )
        );
    };

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    const addProduct = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price.toString());
        formData.append('img', file);
        formData.append('typeId', product.selectedType.id);
        formData.append('info', JSON.stringify(info));

        createProduct(formData)
            .then(() => {
                setName('');
                setPrice(0);
                setFile(null);
                setInfo([]);
                onHide();
            })
            .catch((error) => {
                console.error('Error creating product:', error);
            });
    };

    const handleSelectType = (type) => {
        product.setSelectedType(type);
        setIsDropdownOpen(false);
    };

    return (
        <Dialog open={show} onClose={onHide} className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="relative bg-white rounded-lg shadow-xl max-w-3xl mx-auto p-6 w-full">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                        Добавить продукт
                    </DialogTitle>
                    <DialogDescription className="mt-2 text-sm text-gray-500">
                        Пожалуйста, заполните форму для добавления нового продукта.
                    </DialogDescription>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Выберите тип
                        </label>
                        <div className="relative mt-1">
                            <div
                                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm cursor-pointer"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                {product.selectedType.name || 'Выберите тип'}
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                    {product.types.map((type) => (
                                        <div
                                            key={type.id}onClick={() => handleSelectType(type)}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                        >
                                            {type.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <label className="block text-sm font-medium text-gray-700 mt-4">
                            Название продукта
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Введите название продукта"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-4">
                            Стоимость продукта
                        </label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            placeholder="Введите стоимость продукта"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-4">
                            Загрузить изображение
                        </label>
                        <input
                            type="file"
                            onChange={selectFile}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <hr className="my-4" />
                        <button
                            onClick={addInfo}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Добавить новое свойство
                        </button>
                        {info.map((i) => (
                            <div key={i.number} className="flex items-center space-x-2 mt-4">
                                <input
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Название свойства"
                                    className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <input
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Описание свойства"
                                    className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <button
                                    onClick={() => removeInfo(i.number)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                                >
                                    Удалить</button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={onHide}
                            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                        >
                            Закрыть
                        </button>
                        <button
                            onClick={addProduct}
                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                        >
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
});

export default CreateProduct;