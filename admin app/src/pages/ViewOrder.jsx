import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByUser, getOrders } from '../features/auth/authSlice';
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom"

const columns = [
    {
        title: 'SNo.',
        dataIndex: 'key',
    },
    {
        title: 'Product Name',
        dataIndex: 'name',
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
    },
    {
        title: 'Count',
        dataIndex: 'count',
    },
    {
        title: 'Color',
        dataIndex: 'color',
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


const ViewOrder = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const userId = location.pathname.split("/")[3];

    useEffect(() => {
        dispatch(getOrderByUser(userId));
    }, [])

    const orderState = useSelector((state) => state.auth.orderByUser.data.products);
    console.log(orderState);

    const data1 = [];
    if (orderState && Array.isArray(orderState)) {
        for (let i = 0; i < orderState.length; i++) {
            data1.push({
                key: i + 1,
                name: orderState[i].product.title,
                brand: orderState[i].product.brand,
                count: orderState[i].count,
                color: orderState[i].product.color,
                amount: orderState[i].product.price,
                date: new Date(orderState[i].product.createdAt).toLocaleDateString(),
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
            <h3 className='mb-4 title'>View Order</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default ViewOrder
