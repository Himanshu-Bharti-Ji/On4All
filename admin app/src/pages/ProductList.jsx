import React, { useEffect } from 'react'
import { Table } from 'antd';
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, resetState } from '../features/product/productSlice';
import { Link } from 'react-router-dom';

const columns = [
    {
        title: 'SNo.',
        dataIndex: 'key',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        sorter: (a, b) => a.title.length - b.title.length,
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
    },
    {
        title: 'Category',
        dataIndex: 'category',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];


const ProductList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
        dispatch(getProducts());
    }, [])

    const productState = useSelector((state) => state?.product?.products?.data);

    const data1 = [];
    if (productState && Array.isArray(productState)) {
        for (let i = 0; i < productState.length; i++) {
            data1.push({
                key: i + 1,
                title: `${productState[i].title}`,
                price: `${productState[i].price}`,
                brand: `${productState[i].brand}`,
                category: `${productState[i].productCategory}`,
                action:
                    <>
                        <Link to={`/admin/product/${productState[i]._id}`} className='fs-4 text-success '>
                            <TbEdit />
                        </Link>
                        <Link to="/" className=' ms-3 fs-4 text-danger '>
                            <MdDeleteForever />
                        </Link>
                    </>,
            });
        }
    }

    return (
        <div>
            <h3 className='mb-4 title'>Products</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default ProductList
