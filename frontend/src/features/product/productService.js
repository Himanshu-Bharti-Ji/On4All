import axios from 'axios';
import { base_url, config } from '../../utils/axiosConfig';


const getProducts = async () => {
    const response = await axios.get(`${base_url}/product/all-products`);
    if (response.data) {
        return response.data;
    }
}

const addToWishlist = async (productId) => {
    const response = await axios.put(`${base_url}/product/wishlist`, { productId }, config);
    if (response.data) {
        return response.data;
    }
}

export const productService = {
    getProducts,
    addToWishlist
}