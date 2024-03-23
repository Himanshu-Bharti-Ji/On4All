import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';


const getProductCategories = async () => {
    const response = await axios.get(`${base_url}/product-category/all-categories`)

    return response.data;
}

const createProductCategory = async (productCategory) => {
    const response = await axios.post(`${base_url}/product-category/`, productCategory, config)

    return response.data;
}

const productCategoryService = {
    getProductCategories,
    createProductCategory
}

export default productCategoryService;