import React, { useState } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getEnquiries } from '../features/enquiry/enquirySlice';
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
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Comment',
        dataIndex: 'comment',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];


const Enquirires = () => {
    const dispatch = useDispatch();

    useState(() => {
        dispatch(getEnquiries());
    }, [])

    const enquiryState = useSelector((state) => state.enquiry.enquiries.data)

    const data1 = [];
    if (enquiryState && Array.isArray(enquiryState)) {
        for (let i = 0; i < enquiryState.length; i++) {
            data1.push({
                key: i + 1,
                name: `${enquiryState[i].name}`,
                email: `${enquiryState[i].email}`,
                comment: `${enquiryState[i].comment}`,
                status: (
                    <>
                        <select name="" id="" className='form-control form-select  '>
                            <option value="">Set Status</option>
                        </select>
                    </>
                ),
                action:
                    <>
                        <Link to="/" className='fs-4 text-danger '>
                            <MdDeleteForever />
                        </Link>
                    </>
            });
        }
    }

    return (
        <div>
            <h3 className='mb-4 title'>Enquiries</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default Enquirires
