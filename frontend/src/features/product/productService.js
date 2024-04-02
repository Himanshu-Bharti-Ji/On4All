import axios from 'axios';
import { base_url } from '../../utils/axiosConfig';


const getAllProducts = async (productData) => {
    const response = await axios.get(`${base_url}/product/all-products`, productData);
    if (response.data) {
        return response.data;
    }
}

const addToWishlist = async (productData) => {
    const response = await axios.get(`${base_url}/product/all-products`, productData);
    if (response.data) {
        return response.data;
    }
}

export const productService = {
    getAllProducts,
}