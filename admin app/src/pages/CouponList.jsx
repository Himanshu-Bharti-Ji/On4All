import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { getCoupons } from '../features/coupon/couponSlice';

const columns = [
    {
        title: 'SNo.',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Discount',
        dataIndex: 'discount',
        sorter: (a, b) => a.discount - b.discount,
    },
    {
        title: 'Expiry Date',
        dataIndex: 'expiryDate',
        sorter: (a, b) => a.expiryDate.length - b.expiryDate.length,
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];


const CouponList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoupons());
    }, [])

    const couponState = useSelector((state) => state.coupon.coupons.data);

    const data1 = [];
    if (couponState && Array.isArray(couponState)) {
        for (let i = 0; i < couponState.length; i++) {
            data1.push({
                key: i + 1,
                name: `${couponState[i].name}`,
                discount: `${couponState[i].discount}`,
                expiryDate: new Date(couponState[i].expiry).toLocaleDateString(),
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
            <h3 className='mb-4 title'>Coupons</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default CouponList

