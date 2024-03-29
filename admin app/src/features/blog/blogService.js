import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';


const getBlogs = async () => {
    const response = await axios.get(`${base_url}/blog/all-blogs`)

    return response.data;
}

const createBlog = async (blog) => {
    const response = await axios.post(`${base_url}/blog/`, blog, config)

    return response.data;
}

const blogService = {
    getBlogs,
    createBlog,
}

export default blogService;