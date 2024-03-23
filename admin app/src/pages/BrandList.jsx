import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { resetState } from '../features/blog/blogSlice';

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


const BrandList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
        dispatch(getBrands());
    }, [])

    const brandState = useSelector((state) => state.brand.brands.data);

    const data1 = [];
    if (brandState && Array.isArray(brandState)) {
        for (let i = 0; i < brandState.length; i++) {
            data1.push({
                key: i + 1,
                name: `${brandState[i].title}`,
                action:
                    <>
                        <Link to={`/admin/brand/${brandState[i]._id}`} className='fs-4 text-success '>
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
            <h3 className='mb-4 title'>Brands</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default BrandList
