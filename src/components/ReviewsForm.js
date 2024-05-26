import React, { useState, useContext } from 'react';
import { createReview } from '../http/reviewAPI';
import { Context } from "../index";

const ReviewsForm = ({ user, addReview }) => {
    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const date = new Date().toISOString(); // Добавление текущей даты и времени
        console.log(user.user)
        try {
            const newReview = await createReview({ text, userId: user.user.id, userName: user.user.name, date });
            setText('');
            setMessage('Отзыв успешно создан!');
            setError(null);
            addReview(newReview); // Добавляем новый отзыв в состояние
        } catch (error) {
            console.error('Ошибка при создании отзыва', error);
            setError('Ошибка при создании отзыва');
        }
    };

    return (
        <>
            {user.isAuth ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Оставьте свой отзыв"
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    ></textarea>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Отправить
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                    {message && <p className="text-green-500">{message}</p>}
                </form>
            ) : (
                <p>Войдите в систему, чтобы оставить отзыв.</p>
            )}
        </>
    );
};

export default ReviewsForm;