import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import CustomInput from '../components/CustomInput';
import ReactQuill from 'react-quill';
import Dropzone from 'react-dropzone'
import { deleteImage, uploadImage } from '../features/upload/uploadSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createBlogs, resetState } from '../features/blog/blogSlice';
import { getBlogCategories } from '../features/blogCategory/blogCategorySlice';

let schema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
})


const AddBlog = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [images, setImages] = useState([])

    useEffect(() => {
        dispatch(getBlogCategories());
        formik.values.images = images;
    }, [])

    useEffect(() => {
        formik.setFieldValue('images', images);
    }, [images]);

    const imageState = useSelector((state) => state.upload.images.data)
    const blogState = useSelector((state) => state.blog)
    const blogCategoryState = useSelector((state) => state.blogCategory.blogCategories.data)



    useEffect(() => {
        if (blogState) {
            const { isSuccess, isError, isLoading, createdBlog } = blogState;
            if (isSuccess && createdBlog) {
                toast.success("Blog Added Successfully!");
            }

            if (isError) {
                console.log('Blog creation error');
                toast.error("Something went wrong!");
            }
        }
    }, [blogState]);


    useEffect(() => {
        if (imageState) {
            setImages(imageState.map((i) => ({
                public_id: i.public_id,
                url: i.url
            })));
        }
    }, [imageState]);
    // console.log(images);


    const formik = useFormik({
        initialValues: {
            title: '',
            description: "",
            category: "",
            images: [],
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(createBlogs(values))
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
            }, 3000);
        },
    });

    return (
        <div>
            <h3 className="mb-4 title">Add Blog</h3>
            <div className="">
                <form action="" onSubmit={formik.handleSubmit}>
                    <div>
                        <CustomInput type="text"
                            label="Enter Blog Title"
                            name="title"
                            onCh={formik.handleChange("title")}
                            onBl={formik.handleBlur("title")}
                            val={formik.values.title}
                        />
                        <div className="error">
                            {formik.touched.title && formik.errors.title}
                        </div>
                    </div>
                    <div>
                        <select id="" className='form-control py-3 mt-3  '
                            name="category"
                            onChange={formik.handleChange("category")}
                            onBlur={formik.handleBlur("category")}
                            value={formik.values.category}
                        >
                            <option value="">Select Blog Category</option>
                            {blogCategoryState && blogCategoryState.map((i, index) => {
                                return (
                                    <option key={index} value={i.title}>{i.title}</option>
                                )
                            })}
                        </select>
                        <div className="error">
                            {formik.touched.category && formik.errors.category}
                        </div>
                    </div>
                    <div className="">
                        <ReactQuill theme="snow" className='mt-3'
                            name="description"
                            onChange={formik.handleChange("description")}
                            value={formik.values.description}
                        />
                        <div className="error">
                            {formik.touched.description && formik.errors.description}
                        </div>
                    </div>
                    <div className='bg-white border-1 text-center p-5 mt-3'>
                        <Dropzone onDrop={acceptedFiles => dispatch(uploadImage(acceptedFiles))}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="show-images d-flex flex-wrap gap-3 mt-3 ">
                        {imageState && imageState.map((i, index) => {
                            return (
                                <div key={index} className='position-relative '>
                                    <button
                                        type='button'
                                        onClick={() => dispatch(deleteImage(i.public_id))}
                                        className='btn-close position-absolute '
                                        style={{ top: "8px", right: "8px" }}
                                    >
                                    </button>
                                    <img src={i.url} alt="" width={150} height={150} />
                                </div>
                            )
                        })}
                    </div>
                    <button className='btn btn-success border-0 rounded-3 my-4' type="submit">Add Blog</button>
                </form>
            </div>
        </div>
    )
}

export default AddBlog
