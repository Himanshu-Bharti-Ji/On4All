import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { getProductCategories } from '../features/productCategory/prodCategorySlice';
import { getColors } from '../features/color/colorSlice';
import Multiselect from "react-widgets/Multiselect";
import "react-widgets/styles.css";
import Dropzone from 'react-dropzone'
import { uploadImage } from '../features/upload/uploadSlice';



let schema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().required("Price is required"),
    brand: Yup.string().required("Brand is required"),
    productCategory: Yup.string().required("Product Category is required"),
    color: Yup.array().min(1, 'Colors are required'),
    quantity: Yup.number().required("Quantity is required"),
})

const AddProduct = () => {

    const dispatch = useDispatch();

    const [color, setColor] = useState([])

    useEffect(() => {
        dispatch(getBrands());
        dispatch(getProductCategories());
        dispatch(getColors());
        formik.values.color = color;
    }, [])

    const brandState = useSelector((state) => state.brand.brands.data)
    const productCategoryState = useSelector((state) => state.productCategory.productCategories.data)
    const colorState = useSelector((state) => state.color.colors.data)
    const imageState = useSelector((state) => state.upload.images.data)

    const colors = []
    if (colorState) {
        colorState.forEach((i) => {
            colors.push({
                _id: i._id,
                color: i.title
            })
        });
    }



    const formik = useFormik({
        initialValues: {
            title: '',
            description: "",
            price: "",
            brand: "",
            productCategory: "",
            color: [],
            quantity: ""
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    });

    return (
        <div>
            <h3 className="mb-4 title">Add Product</h3>
            <div>
                <form onSubmit={formik.handleSubmit} className='d-flex flex-column gap-3 '>
                    <div>
                        <CustomInput type="text"
                            label="Enter Product Title"
                            name="title"
                            onCh={formik.handleChange("title")}
                            onBl={formik.handleBlur("title")}
                            val={formik.values.title}
                        />
                        <div className="error">
                            {formik.touched.title && formik.errors.title}
                        </div>
                    </div>
                    <div className="">
                        <ReactQuill theme="snow"
                            name="description"
                            onChange={formik.handleChange("description")}
                            value={formik.values.description}
                        />
                        <div className="error">
                            {formik.touched.description && formik.errors.description}
                        </div>
                    </div>
                    <div className="">
                        <CustomInput type="number"
                            label="Enter Product Price"
                            name="price"
                            onCh={formik.handleChange("price")}
                            onBl={formik.handleBlur("price")}
                            val={formik.values.price}
                        />
                        <div className="error">
                            {formik.touched.price && formik.errors.price}
                        </div>
                    </div>

                    <select id="" className='form-control py-3 mb-3 '
                        name="brand"
                        onChange={formik.handleChange("brand")}
                        onBlur={formik.handleBlur("brand")}
                        value={formik.values.brand}
                    >
                        <option value="">Select Brand</option>
                        {brandState && brandState.map((i, index) => {
                            return (
                                <option key={index} value={i.title}>{i.title}</option>
                            )
                        })}
                    </select>
                    <div className="error">
                        {formik.touched.brand && formik.errors.brand}
                    </div>
                    <select id="" className='form-control py-3 mb-3 '
                        name="productCategory"
                        onChange={formik.handleChange("productCategory")}
                        onBlur={formik.handleBlur("productCategory")}
                        value={formik.values.productCategory}
                    >
                        <option value="">Select Category</option>
                        {productCategoryState && productCategoryState.map((i, index) => {
                            return (
                                <option key={index} value={i.title}>{i.title}</option>
                            )
                        })}
                    </select>
                    <div className="error">
                        {formik.touched.productCategory && formik.errors.productCategory}
                    </div>
                    <Multiselect
                        name="color"
                        dataKey="id"
                        textField="color"
                        data={colors.filter(color => !formik.values.color.includes(color.color))}
                        value={formik.values.color}
                        onChange={(selectedColors) => {
                            formik.setFieldValue('color', selectedColors);
                        }}
                    />
                    <div className="error">
                        {formik.touched.color && formik.errors.color}
                    </div>


                    <div>
                        <CustomInput type="number"
                            label="Enter Product Quantity"
                            name="quantity"
                            onCh={formik.handleChange("quantity")}
                            onBl={formik.handleBlur("quantity")}
                            val={formik.values.quantity}
                        />
                        <div className="error">
                            {formik.touched.quantity && formik.errors.quantity}
                        </div>
                    </div>

                    <div className='bg-white border-1 text-center p-5 '>
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
                    div.show-images


                    <button className='btn btn-success border-0 rounded-3 my-4' type="submit">Add Product</button>
                </form>
            </div >
        </div >
    )
}

export default AddProduct
