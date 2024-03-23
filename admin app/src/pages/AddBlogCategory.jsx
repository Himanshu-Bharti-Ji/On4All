import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { newBlogCategory } from "../features/blogCategory/blogCategorySlice"

let schema = Yup.object().shape({
    title: Yup.string().required("Category Name is required"),
})

const AddBlogCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newBlogCategoryState = useSelector((state) => state.blogCategory)

    useEffect(() => {
        if (newBlogCategoryState) {
            console.log(newBlogCategoryState);
            const { isSuccess, isError, isLoading, createdBlogCategory } = newBlogCategoryState;
            if (isSuccess && createdBlogCategory) {
                toast.success("Blog Category Added Successfully!");
            }
            if (isError) {
                console.log('Blog Category creation error');
                toast.error("Something went wrong!");
            }
        }
    }, [newBlogCategoryState]);

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(newBlogCategory(values))
            formik.resetForm();
            setTimeout(() => {
                navigate("/admin/blog-category-list")
            }, 3000);
        },
    });

    return (
        <div>
            <h3 className="mb-4 title">Add Blog Category</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div>
                        <CustomInput type="text"
                            label="Enter Blog Category"
                            name="title"
                            onCh={formik.handleChange("title")}
                            onBl={formik.handleBlur("title")}
                            val={formik.values.title}
                            id="blogCategory"
                        />
                        <div className="error">
                            {formik.touched.title && formik.errors.title}
                        </div>
                    </div>
                    <button className='btn btn-success border-0 rounded-3 my-2' type="submit">Add Blog Category</button>
                </form>
            </div>
        </div>
    )
}

export default AddBlogCategory
