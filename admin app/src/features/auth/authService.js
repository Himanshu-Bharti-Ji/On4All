import axios from 'axios';
import { base_url } from '../../utils/base_url';


const getTokenFromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const config = {
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.data.accessToken : ""}`,
        Accept: "application/json"
    }
}

const login = async (userData) => {
    const response = await axios.post(`${base_url}/user/admin-login`, userData)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}
// console.log(getTokenFromLocalStorage.data.refreshToken);
// console.log(config);

const getOrders = async () => {
    // console.log(getTokenFromLocalStorage.data.accessToken);
    const response = await axios.get(`${base_url}/user/get-orders`, config)
    return response.data;
}

const authService = {
    login,
    getOrders,
}

export default authService;