import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../features/blog/blogSlice';
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
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
        title: 'Category',
        dataIndex: 'category',
        sorter: (a, b) => a.category.length - b.category.length,
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];


const BlogList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogs());
    }, [])

    const blogState = useSelector((state) => state.blog.blogs.data)

    const data1 = [];
    if (blogState && Array.isArray(blogState)) {
        for (let i = 0; i < blogState.length; i++) {
            data1.push({
                key: i + 1,
                title: `${blogState[i].title}`,
                category: `${blogState[i].category}`,
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
            <h3 className='mb-4 title'>Blog List</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default BlogList
