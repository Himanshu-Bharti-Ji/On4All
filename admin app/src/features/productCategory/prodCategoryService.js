import axios from 'axios';
import { base_url } from '../../utils/base_url';



const getProductCategories = async () => {
    const response = await axios.get(`${base_url}/product-category/all-categories`)

    return response.data;
}

const productCategoryService = {
    getProductCategories,
}

export default productCategoryService;