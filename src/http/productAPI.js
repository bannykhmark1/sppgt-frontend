import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type);
    return data;
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type');
    console.log(data);
    return data;
}

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product);
    return data;
}

export const deleteProduct = async (productId) => {
    const { data } = await $authHost.delete(`api/product/${productId}`);
    return data;
};

export const fetchProducts = async (typeId, page, limit=5, minPrice, maxPrice) => {
    const params = { typeId, page, limit };

    if (minPrice !== '' && minPrice !== null && !isNaN(minPrice)) {
        params.minPrice = minPrice;
    }
    if (maxPrice !== '' && maxPrice !== null && !isNaN(maxPrice)) {
        params.maxPrice = maxPrice;
    }

    const { data } = await $host.get('api/product', { params });
    return data;
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('api/product/' + id);
    return data;
}