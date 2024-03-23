import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createColor, resetState } from '../features/color/colorSlice';

let schema = Yup.object().shape({
    title: Yup.string().required("Color is required"),
})

const AddColor = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newColorState = useSelector((state) => state.color)

    useEffect(() => {
        if (newColorState) {
            const { isSuccess, isError, isLoading, createdColor } = newColorState;
            if (isSuccess && createdColor) {
                toast.success("Color Added Successfully!");
            }

            if (isError) {
                console.log('Color creation error');
                toast.error("Something went wrong!");
            }
        }
    }, [newColorState]);

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(createColor(values))
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
            }, 3000);
        },
    });

    return (
        <div>
            <h3 className="mb-4 title">Add Color</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div>
                        <CustomInput type="color"
                            label="Enter Color"
                            name="title"
                            onCh={formik.handleChange("title")}
                            onBl={formik.handleBlur("title")}
                            val={formik.values.title}
                            id="color"
                        />
                        <div className="error">
                            {formik.touched.title && formik.errors.title}
                        </div>
                    </div>
                    <button className='btn btn-success border-0 rounded-3 my-2' type="submit">Add Color</button>
                </form>
            </div>
        </div>
    )
}

export default AddColor
