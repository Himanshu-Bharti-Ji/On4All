import React, { useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createCoupon, resetState } from '../features/coupon/couponSlice';

let schema = Yup.object().shape({
    name: Yup.string().required("Coupon Name is required"),
    expiry: Yup.date().required("Expiry Date is required"),
    discount: Yup.number().required("Discount Percentage is required"),
})

const AddCoupon = () => {

    const dispatch = useDispatch();

    const newCouponState = useSelector((state) => state.coupon)

    useEffect(() => {
        if (newCouponState) {
            const { isSuccess, isError, isLoading, createdCoupon } = newCouponState;
            if (isSuccess && createdCoupon) {
                toast.success("Coupon Added Successfully!");
            }

            if (isError) {
                console.log('Coupon creation error');
                toast.error("Something went wrong!");
            }
        }
    }, [newCouponState]);

    const formik = useFormik({
        initialValues: {
            name: '',
            expiry: '',
            discount: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(createCoupon(values));
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
            }, 3000);
        },
    });

    return (
        <div>
            <h3 className="mb-4 title">Add Coupon</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div>
                        <CustomInput type="text"
                            label="Enter Coupon Name"
                            name="name"
                            onCh={formik.handleChange("name")}
                            onBl={formik.handleBlur("name")}
                            val={formik.values.name}
                            id="couponName"
                        />
                        <div className="error">
                            {formik.touched.name && formik.errors.name}
                        </div>
                    </div>
                    <div>
                        <CustomInput type="date"
                            label="Enter Expiry Date"
                            name="expiry"
                            onCh={formik.handleChange("expiry")}
                            onBl={formik.handleBlur("expiry")}
                            val={formik.values.expiry}
                            id="expiryDate"
                        />
                        <div className="error">
                            {formik.touched.expiry && formik.errors.expiry}
                        </div>
                    </div>
                    <div>
                        <CustomInput type="number"
                            label="Enter Discount Percentage"
                            name="discount"
                            onCh={formik.handleChange("discount")}
                            onBl={formik.handleBlur("discount")}
                            val={formik.values.discount}
                            id="discount"
                        />
                        <div className="error">
                            {formik.touched.discount && formik.errors.discount}
                        </div>
                    </div>
                    <button className='btn btn-success border-0 rounded-3 my-3' type="submit">Add Coupon</button>
                </form>
            </div>
        </div>
    )
}

export default AddCoupon
