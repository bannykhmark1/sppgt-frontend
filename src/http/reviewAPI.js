import { $host } from '.';

// Создание нового отзыва
export const createReview = async (data) => {
    const response = await $host.post("/api/reviews", data);
    return response.data;
};

// Получение всех отзывов
export const getReviews = async () => {
    const response = await $host.get("/api/reviews");
    return response.data;
};

// Получение одного отзыва по ID
export const getReviewById = async (id) => {
    const response = await $host.get(`/api/reviews/${id}`); // Корректируем кавычки
    return response.data;
};

// Обновление отзыва по ID
export const updateReview = async (id, data) => {
    const response = await $host.put(`/api/reviews/${id}`, data); // Корректируем кавычки
    return response.data;
};

// Удаление отзыва по ID
export const deleteReview = async (id) => {
    const response = await $host.delete(`/api/reviews/${id}`); // Корректируем кавычки
    return response.data;
};