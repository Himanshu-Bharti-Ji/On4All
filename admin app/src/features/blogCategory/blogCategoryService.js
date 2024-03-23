import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';




const getBlogCategories = async () => {
    const response = await axios.get(`${base_url}/blog-category/all-categories`)

    return response.data;
}

const createBlogCategory = async (blogCategory) => {
    const response = await axios.post(`${base_url}/blog-category/`, blogCategory, config)

    return response.data;
}

const blogCategoryService = {
    getBlogCategories,
    createBlogCategory,
}

export default blogCategoryService;