import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/auth/authSlice';
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';

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
        title: 'Amount',
        dataIndex: 'amount',
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];


const Orders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
    }, [])

    const blogState = useSelector((state) => state.auth.orders.data);

    const data1 = [];
    if (blogState && Array.isArray(blogState)) {
        for (let i = 0; i < blogState.length; i++) {
            data1.push({
                key: i + 1,
                name: `${blogState[i].orderby.firstName} ${blogState[i].orderby.lastName}`,
                product: blogState[i].products.map((j, index) => {
                    return (
                        <li key={index} className='list-unstyled '>{j.product.title}</li>
                    )
                }),
                amount: blogState[i].paymentIntent.amount,
                date: new Date(blogState[i].createdAt).toLocaleDateString(),
                action:
                    <>
                        <Link to="/" className='fs-4 text-success '>
                            <TbEdit />
                        </Link>
                        <Link to="/" className=' ms-3 fs-4 text-danger '>
                            <MdDeleteForever />
                        </Link>
                    </>
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
