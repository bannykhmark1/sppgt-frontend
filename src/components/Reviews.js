import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { check } from "../http/userAPI";
import { Context } from "../index";

const Reviews = ({ reviews }) => {

    const { user } = useContext(Context);
    console.log(user.user.name)

    return (
        <div className="space-y-4">
            {reviews.map((review) => (
                <div key={review.id} className="p-4 border rounded-lg shadow-md">
                    <p className="text-gray-700"><strong>{review.userName}:</strong> {new Date(review.createdAt).toLocaleString()}</p>
                    <p>{review.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;