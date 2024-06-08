import React, { useState, useRef, useEffect } from 'react';
import {  } from "../index";

const Review = ({ review }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClamped, setIsClamped] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const checkClamping = () => {
            const element = textRef.current;
            if (element.scrollHeight > element.clientHeight) {
                setIsClamped(true);
            } else {
                setIsClamped(false);
            }
        };

        checkClamping();
        window.addEventListener('resize', checkClamping); // проверка при изменении размера окна

        return () => {
            window.removeEventListener('resize', checkClamping);
        };
    }, []);

    return (
        <div className="p-4 border rounded-lg shadow-md bg-white max-w-full break-words">
            <p className="text-gray-700">
                <strong>{review.userName}:</strong> {new Date(review.createdAt).toLocaleString()}
            </p>
            <p
                ref={textRef}
                className={`${isExpanded ? 'whitespace-normal' : 'line-clamp-3'}`}
            >
                {review.text}
            </p>
            {isClamped && (
                <button
                    className="text-gray-500 mt-2"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Свернуть' : 'Читать далее'}
                </button>
            )}
        </div>
    );
};

const Reviews = ({ reviews }) => {

    return (
        <div className="space-y-4">
            {reviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
        </div>
    );
};

export default Reviews;
