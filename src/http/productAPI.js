import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    console.log(data)
    return data
}


export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async (typeId, page, limit= 5) => {
    const {data} = await $host.get('api/product', {params: {
            typeId, page, limit
        }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}