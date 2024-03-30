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

    const orderState = useSelector((state) => state.auth.orders.data);

    const data1 = [];
    if (orderState && Array.isArray(orderState)) {
        for (let i = 0; i < orderState.length; i++) {
            data1.push({
                key: i + 1,
                name: `${orderState[i].orderby.firstName} ${orderState[i].orderby.lastName}`,
                product: <Link to={`/admin/order/${orderState[i].orderby._id}`}>View Orders</Link>,
                amount: orderState[i].paymentIntent.amount,
                date: new Date(orderState[i].createdAt).toLocaleDateString(),
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
