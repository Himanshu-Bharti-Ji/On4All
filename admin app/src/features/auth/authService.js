import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { config } from "../../utils/axiosConfig"



const login = async (userData) => {
    const response = await axios.post(`${base_url}/user/admin-login`, userData)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

const getOrders = async () => {
    const response = await axios.get(`${base_url}/user/getAllOrders`, config)
    return response.data;
}

const getOrder = async (id) => {
    const response = await axios.get(`${base_url}/user/getSingleOrder/${id}`, config)
    return response.data;
}

const updateOrder = async (data) => {
    const response = await axios.put(`${base_url}/user/updateOrder/${data?.id}`, { status: data?.status }, config)
    return response.data;
}

const getMonthlyOrders = async () => {
    const response = await axios.get(`${base_url}/user/getMonthWiseOrderIncome`, config)
    return response.data;
}
const getYearlyStats = async () => {
    const response = await axios.get(`${base_url}/user/getYearlyTotalOrders`, config)
    return response.data;
}

const authService = {
    login,
    getOrders,
    getOrder,
    getMonthlyOrders,
    getYearlyStats,
    updateOrder,
}

export default authService;