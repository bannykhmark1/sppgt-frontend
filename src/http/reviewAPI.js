import axios from 'axios';

const API_URL = '/api/reviews';

export const createReview = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const getReviews = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getReviewById = async (id) => {
    const response = await axios.get(API_URL + id );
    return response.data;
};

export const updateReview = async (id, data) => {
    const response = await axios.put(API_URL + id, data);
    return response.data;
};

export const deleteReview = async (id) => {
    const response = await axios.delete(API_URL + id);
    return response.data;
};