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
                <div className="relative bg-white rounded-lg shadow-xl max-w-md mx-auto p-6 w-full">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                        Удалить продукт
                    </DialogTitle>
                    <DialogDescription className="mt-2 text-sm text-gray-500">
                        Выберите товар для удаления.
                    </DialogDescription>
                    <div className="mt-4">
                        {loading ? (
                            <div>Загрузка...</div>
                        ) : (
                            <div className="space-y-4">
                                {products.map(product => (
                                    <div key={product.id} className="flex items-center justify-between p-4 bg-white border rounded-lg shadow">
                                        <span>{product.name}</span>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded-md"
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
                            className="bg-gray-500 text-white px-4 py-2 rounded-md"
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
