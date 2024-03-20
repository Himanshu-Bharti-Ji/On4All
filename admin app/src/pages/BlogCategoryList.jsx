import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogCategories } from '../features/blogCategory/blogCategorySlice';
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
        title: 'Action',
        dataIndex: 'action',
    },
];


const BlogCategoryList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogCategories());
    }, [])

    const blogCategoryState = useSelector((state) => state.blogCategory.blogCategories.data)

    const data1 = [];
    if (blogCategoryState && Array.isArray(blogCategoryState)) {
        for (let i = 0; i < blogCategoryState.length; i++) {
            data1.push({
                key: i + 1,
                name: `${blogCategoryState[i].title}`,
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
            <h3 className='mb-4 title'>Blog Category</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default BlogCategoryList
