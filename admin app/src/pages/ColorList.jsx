import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCurrentColor, getColors, resetState } from '../features/color/colorSlice';
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import CustomModal from '../components/CustomModal';

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


const ColorList = () => {

    const [open, setOpen] = useState(false);
    const [colorId, setColorId] = useState("");
    const showModal = (e) => {
        setOpen(true);
        setColorId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState())
        dispatch(getColors());
    }, [])

    const colorState = useSelector((state) => state.color.colors.data);

    const data1 = [];
    if (colorState && Array.isArray(colorState)) {
        for (let i = 0; i < colorState.length; i++) {
            data1.push({
                key: i + 1,
                name: `${colorState[i].title}`,
                action:
                    <>
                        <Link to={`/admin/color/${colorState[i]._id}`} className='fs-4 text-success '>
                            <TbEdit />
                        </Link>
                        <button to="/" className=' ms-3 fs-4 text-danger bg-transparent border-0 '
                            onClick={() => showModal(colorState[i]._id)}
                        >
                            <MdDeleteForever />
                        </button>
                    </>
            });
        }
    }

    const deleteColor = (e) => {
        setOpen(false)
        dispatch(deleteCurrentColor(e))
        setTimeout(() => {
            dispatch(getColors());
        }, 100);
    }

    return (
        <div>
            <h3 className='mb-4 title'>Colors</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                hideModal={hideModal}
                open={open}
                performAction={() => deleteColor(colorId)}
                title="Are you sure you want to delete this Color ?"
            />
        </div>
    )
}

export default ColorList
