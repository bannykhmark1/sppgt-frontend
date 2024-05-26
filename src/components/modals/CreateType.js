import React, { useState } from 'react';
// Вы можете использовать библиотеку для управления модальными окнами, например Headless UI
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { createType } from "../../http/productAPI";

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState('');

    const addType = async () => {
        try {
            const data = await createType({ name: value });
            setValue('');
            onHide();
        } catch (error) {
            console.error('Error creating type:', error);
        }
    };

    return (
        <Dialog open={show} onClose={onHide} className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="relative bg-white rounded-lg shadow-xl max-w-md mx-auto p-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900">
                        Добавить тип
                    </Dialog.Title>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Название типа
                        </label>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Введите название типа"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={onHide}
                            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                        >
                            Закрыть
                        </button>
                        <button
                            onClick={addType}
                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                        >
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default CreateType;