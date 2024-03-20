import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCategories } from '../features/productCategory/prodCategorySlice';
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
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];


const CategoryList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductCategories());
    }, [])

    const productCategoryState = useSelector((state) => state.productCategory.productCategories.data);

    const data1 = [];
    if (productCategoryState && Array.isArray(productCategoryState)) {
        for (let i = 0; i < productCategoryState.length; i++) {
            data1.push({
                key: i + 1,
                name: `${productCategoryState[i].title}`,
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
            <h3 className='mb-4 title'>Product Categories</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default CategoryList
