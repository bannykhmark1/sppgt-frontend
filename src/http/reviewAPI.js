import axios from 'axios';
import { $host } from '.';


export const createReview = async (data) => {
    const response = await $host.post("api/reviews", data);
    return response.data;
};

export const getReviews = async () => {
    const response = await $host.get("api/reviews");
    return response.data;
};

export const getReviewById = async (id) => {
    const response = await $host.get("api/reviews/" + id );
    return response.data;
};

export const updateReview = async (id, data) => {
    const response = await $host.put("api/reviews/" + id, data);
    return response.data;
};

export const deleteReview = async (id) => {
    const response = await $host.delete("api/reviews/" + id);
    return response.data;
};