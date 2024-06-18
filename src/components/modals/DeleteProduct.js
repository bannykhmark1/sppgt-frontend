import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogDescription } from '@headlessui/react';
import { fetchProducts, deleteProduct as deleteProductAPI } from '../../http/productAPI';

const DeleteProduct = ({ show, onHide }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const fetchedProducts = await fetchProducts();
                setProducts(fetchedProducts.rows);
                setLoading(false);
            } catch (err) {
                console.error('Ошибка при загрузке товаров', err);
                setLoading(false);
            }
        };

        if (show) {
            loadProducts();
        }
    }, [show]);

    const handleDelete = async (productId) => {
        try {
            await deleteProductAPI(productId);
            setProducts(products.filter(product => product.id !== productId));
        } catch (error) {
            console.error('Ошибка при удалении товара:', error);
        }
    };

    return (
        <Dialog open={show} onClose={onHide} className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="relative mx-auto bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                        Удалить продукт
                    </DialogTitle>
                    <DialogDescription className="mt-2 text-sm text-gray-500">
                        Выберите товар для удаления.
                    </DialogDescription>
                    <div className="mt-4">
                        {loading ? (
                            <div className="text-center">Загрузка...</div>
                        ) : (
                            <div className="space-y-4 max-h-96 overflow-y-auto">
                                {products.map(product => (
                                    <div key={product.id} className="flex items-center justify-between p-4 bg-white border rounded-lg shadow">
                                        <span className="font-medium">{product.name}</span>
                                        <button
                                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                            onClick={() => handleDelete(product.id)}
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={onHide}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs leading-4 font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default DeleteProduct;