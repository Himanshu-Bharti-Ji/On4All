import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';



const getCoupons = async () => {
    const response = await axios.get(`${base_url}/coupon/all-coupons`, config)

    return response.data;
}

const createCoupon = async (coupon) => {
    const response = await axios.post(`${base_url}/coupon/`, coupon, config)

    return response.data;
}

const couponService = {
    getCoupons,
    createCoupon,
}

export default couponService;