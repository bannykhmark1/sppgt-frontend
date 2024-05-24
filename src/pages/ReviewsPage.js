import React from 'react';
import ReviewsForm from '../components/ReviewsForm';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const ReviewsPage = ({ userId }) => {
    return (
        <>
        <NavBar />
        <div>
            {console.log(userId)}
            <h1>Отзывы о нашей компании</h1>
            <ReviewsForm userId={userId} />
            <Reviews />
        </div>
        <Footer />
        </>
    );
};

export default ReviewsPage;