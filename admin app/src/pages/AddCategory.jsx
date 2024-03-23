import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createProductCategory, resetState } from '../features/productCategory/prodCategorySlice';

let schema = Yup.object().shape({
    title: Yup.string().required("Category Name is required"),
})

const AddCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newProductCategoryState = useSelector((state) => state.productCategory)

    useEffect(() => {
        if (newProductCategoryState) {
            const { isSuccess, isError, isLoading, createdCategory } = newProductCategoryState;
            if (isSuccess && createdCategory) {
                toast.success("Product Category Added Successfully!");
            }

            if (isError) {
                console.log('Product Category creation error');
                toast.error("Something went wrong!");
            }
        }
    }, [newProductCategoryState]);

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(createProductCategory(values))
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
            }, 3000);
        },
    });

    return (
        <div>
            <h3 className="mb-4 title">Add Product Category</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div>
                        <CustomInput type="text"
                            label="Enter Product Category"
                            name="title"
                            onCh={formik.handleChange("title")}
                            onBl={formik.handleBlur("title")}
                            val={formik.values.title}
                        />
                        <div className="error">
                            {formik.touched.title && formik.errors.title}
                        </div>
                    </div>
                    <button className='btn btn-success border-0 rounded-3 my-3' type="submit">Add Category</button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory
