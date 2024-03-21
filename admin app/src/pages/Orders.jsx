import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/auth/authSlice';

const columns = [
    {
        title: 'SNo.',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Product',
        dataIndex: 'product',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
];


const Orders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
    }, [])

    const blogState = useSelector((state) => state.auth.orders.data)
    // console.log(blogState);

    const data1 = [];
    if (blogState && Array.isArray(blogState)) {
        for (let i = 0; i < 46; i++) {
            data1.push({
                key: i,
                name: `Edward King ${i}`,
                product: 32,
                status: `London, Park Lane no. ${i}`,
            });
        }
    }


    return (
        <div>
            <h3 className='mb-4 title'>Orders</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default Orders
