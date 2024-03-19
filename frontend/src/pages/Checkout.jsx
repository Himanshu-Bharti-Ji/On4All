// importing images
import smartwatch from "../images/smartwatch.jpg"

import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import Container from '../components/Container';




function Checkout() {
    return (
        <>

            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">On4All</h3>
                            <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to={"/cart"} className='text-dark total-price '>Cart</Link>
                                    </li>
                                    &nbsp; {">"}
                                    <li className="breadcrumb-item total-price active" aria-current="page">Information</li>
                                    &nbsp; {">"}
                                    <li className="breadcrumb-item total-price active" aria-current="page">Shipping</li>
                                    &nbsp; {">"}
                                    <li className="breadcrumb-item total-price active" aria-current="page">Payment</li>
                                </ol>
                            </nav>
                            <h4 className="title total">Contact Information</h4>
                            <p className="user-details total">Himanshu Bharti (himanshubhartisoe@gmail.com)</p>
                            <h4 className='mb-3'>Shipping Address</h4>
                            <form className='d-flex flex-wrap justify-content-between gap-15' action="">
                                <div className='w-100'>
                                    <select className='form-control form-select ' name="" id="">
                                        <option value="" selected disabled>Select Country</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1 '>
                                    <input placeholder='First Name' type="text" className="form-control" />
                                </div>
                                <div className='flex-grow-1 '>
                                    <input placeholder='Last Name' type="text" className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input placeholder='Address' type="text" className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input placeholder='Appartment, Suite, etc' type="text" className="form-control" />
                                </div>
                                <div className='flex-grow-1 '>
                                    <input placeholder='City' type="text" className="form-control" />
                                </div>
                                <div className='flex-grow-1 '>
                                    <select className='form-control form-select ' name="" id="">
                                        <option value="" selected disabled>Select State</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1 '>
                                    <input placeholder='Pin Code' type="text" className="form-control" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <Link to={"/cart"} className='text-dark' >< IoArrowBackOutline className='me-2' />Return to Cart</Link>
                                        <Link to={"/cart"} className='button' >Continue to Shipping</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className='border-bottom py-4'>
                            <div className="d-flex align-items-center justify-content-between  gap-10 mb-2">
                                <div className='w-75 d-flex gap-15'>
                                    <div className='w-25 position-relative '>
                                        <span style={{ top: "-13px", right: "-7px" }} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                        <img className='img-fluid ' src={smartwatch} alt="productImage" />
                                    </div>
                                    <div>
                                        <h5 className="total">LEAF WATCH WIRELESS BT CALLING SMART WATCH-CARBON BLACK</h5>
                                        <p className='total-price'>M / #414143</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <h5 className='total'>₹ 2,199</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center '>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>₹ 2,199</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center '>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>₹ 2,199</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4   '>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>₹ 2,199</h5>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Checkout
