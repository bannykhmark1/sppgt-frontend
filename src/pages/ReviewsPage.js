import React, { useState, useEffect, useContext } from 'react';
import ReviewsForm from '../components/ReviewsForm';
import Reviews from '../components/Reviews';
import { getReviews } from '../http/reviewAPI';
import { Context } from "../index";
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const { user } = useContext(Context);
    
    useEffect(() => {
        const restoreAuth = async () => {
            try {
                await user.restoreAuth(); // Восстанавливаем авторизацию при загрузке
            } catch (error) {
                console.error('Ошибка при восстановлении авторизации', error);
            }
        };

        restoreAuth();

        const fetchInitialReviews = async () => {
            try {
                const initialReviews = await getReviews();
                setReviews(initialReviews);
            } catch (error) {
                console.error('Ошибка при получении начальных отзывов', error);
                setError('Ошибка при получении начальных отзывов');
            }
        };

        fetchInitialReviews();
    }, [user]);

    const addReview = (newReview) => {
        setReviews(prevReviews => [newReview, ...prevReviews]);
    };

    // Сортировка по дате добавления
    const sortedReviews = reviews.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <>
          <div className="flex flex-col justify-between min-h-screen mt-20">
            <NavBar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Отзывы о нашей компании</h1>
                <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
                    <ReviewsForm user={user} addReview={addReview} />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8">
                    {error && <p className="text-red-500">{error}</p>}
                    <Reviews reviews={sortedReviews} />
                </div>
            </div>
            <Footer />
            </div>
        </>
    );
};
export default ReviewsPage;