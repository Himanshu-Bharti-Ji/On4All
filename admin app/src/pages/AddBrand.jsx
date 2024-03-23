import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createBrand, resetState } from '../features/brand/brandSlice';

let schema = Yup.object().shape({
    title: Yup.string().required("Brand Name is required"),
})

const AddBrand = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newBrandState = useSelector((state) => state.brand)

    useEffect(() => {
        if (newBrandState) {
            const { isSuccess, isError, isLoading, createdBrand } = newBrandState;
            if (isSuccess && createdBrand) {
                toast.success("Brand Added Successfully!");
            }

            if (isError) {
                console.log('Brand creation error');
                toast.error("Something went wrong!");
            }
        }
    }, [newBrandState]);

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(createBrand(values))
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
            }, 3000);
        },
    });

    return (
        <div>
            <h3 className="mb-4 title">Add Brand</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div>
                        <CustomInput type="text"
                            label="Enter Brand"
                            name="title"
                            onCh={formik.handleChange("title")}
                            onBl={formik.handleBlur("title")}
                            val={formik.values.title}
                            id="brand"
                        />
                        <div className="error">
                            {formik.touched.title && formik.errors.title}
                        </div>
                    </div>
                    <button className='btn btn-success border-0 rounded-3 my-3' type="submit">Add Brand</button>
                </form>
            </div>
        </div>
    )
}

export default AddBrand
