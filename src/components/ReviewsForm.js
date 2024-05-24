import React, { useState } from 'react';
import { createReview } from '../http/reviewAPI';  // Импортируем функцию для создания отзыва

const ReviewsForm = ({ userId }) => {
    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createReview({ text, userId });
            console.log('Отзыв создан:', response);
            setText('');
            setMessage('Отзыв успешно создан!');
            setError(null);
        } catch (error) {
            console.error('Ошибка при создании отзыва', error);
            setError('Ошибка при создании отзыва');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Оставьте свой отзыв"
                required
            ></textarea>
            <button type="submit">Отправить</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
        </form>
    );
};

export default ReviewsForm;
