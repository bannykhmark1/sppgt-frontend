import React, { useEffect, useState } from 'react';
import { getReviews } from '../http/reviewAPI';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviewsData = await getReviews();
                setReviews(reviewsData);
            } catch (error) {
                console.error('Ошибка при получении отзывов', error);
                setError('Ошибка при получении отзывов');
            }
        };

        fetchReviews();
    }, []);

    return (
        <div>
            <h1>Отзывы</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>{review.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;
