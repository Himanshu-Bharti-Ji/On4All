// importing images
import smartwatch from "../images/smartwatch.jpg"
import boat_headphone from "../images/boat-headphone.jpg"
import gr4 from "../images/gr4.svg"
import gr3 from "../images/gr3.svg"
import gr2 from "../images/gr2.svg"
import gr from "../images/gr.svg"

import React from 'react'
import { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';




function OurStore() {
    const [grid, setGrid] = useState(2);
    return (
        <>
            <Meta title={"On4All | Our Store"} />
            <BreadCrumb title="Our Store" />

            <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3 '>
                            <h3 className="filter-title">Shop By Categories</h3>
                            <div>
                                <ul className='ps-0 mb-0 '>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>

                        <div className='filter-card mb-3 '>
                            <h3 className="filter-title">Filter By</h3>
                            <div>
                                <h5 className='sub-title'>Availability</h5>
                                <div>
                                    <div className="form-check">
                                        <input className='form-check-input ' type="checkbox" value="" id="inStock" />
                                        <label className='form-check-label ' htmlFor="inStock">In stock (1)</label>
                                    </div>
                                    <div className="form-check">
                                        <input className='form-check-input ' type="checkbox" value="" id="outOfStock" />
                                        <label className='form-check-label ' htmlFor="outOfStock">Out of stock (0)</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Price ( in Rupees ) </h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating">
                                        <input className="form-control" placeholder='From' id="input1"></input>
                                        <label htmlFor="input1">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" placeholder='To' id="input2"></input>
                                        <label htmlFor="inpu2t">To</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Colors</h5>
                                <div>
                                    <div>
                                        <Color />
                                    </div>
                                </div>
                                <h5 className='sub-title'>Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input className='form-check-input ' type="checkbox" value="" id="color-1" />
                                        <label className='form-check-label ' htmlFor="color-1">S (2)</label>
                                    </div>
                                    <div className="form-check">
                                        <input className='form-check-input ' type="checkbox" value="" id="color-2" />
                                        <label className='form-check-label ' htmlFor="color-2">M (2)</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='filter-card mb-3 '>
                            <h3 className="filter-title">Product Tags</h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary  rounded-3 py-2 px-3 ">Headphone</span>
                                    <span className="badge bg-light text-secondary  rounded-3 py-2 px-3 ">Laptop</span>
                                    <span className="badge bg-light text-secondary  rounded-3 py-2 px-3 ">Mobile</span>
                                    <span className="badge bg-light text-secondary  rounded-3 py-2 px-3 ">Realme</span>
                                    <span className="badge bg-light text-secondary  rounded-3 py-2 px-3 ">Speaker</span>
                                    <span className="badge bg-light text-secondary  rounded-3 py-2 px-3 ">Tablet</span>
                                    <span className="badge bg-light text-secondary  rounded-3 py-2 px-3 ">Vivo</span>
                                    <span className="badge bg-light text-secondary  rounded-3 py-2 px-3 ">Wire</span>

                                </div>
                            </div>
                        </div>

                        <div className='filter-card mb-3 '>
                            <h3 className="filter-title">Random Product</h3>
                            <div>
                                <div className="random-products mb-3  d-flex ">
                                    <div className="w-50 ">
                                        <img className='w-75' src={smartwatch} alt="watch" />
                                    </div>
                                    <div className="w-50">
                                        <h5>Smart Watch Series 7</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>₹33114.09</b>
                                    </div>
                                </div>
                                <div className="random-products d-flex ">
                                    <div className="w-50 ">
                                        <img className='w-75' src={boat_headphone} alt="headphone" />
                                    </div>
                                    <div className="w-50">
                                        <h5>boAt Headphnoes</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>₹33114.09</b>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-9">
                        <div className="filter-short-grid mb-4 ">
                            <div className="d-flex justify-content-between align-items-center ">
                                <div className="filter-left d-flex align-items-center gap-10">
                                    <p className="mb-0">Sort by :</p>
                                    <select name="" className='selector form-control form-select ' id="">
                                        <option value="manual">Featured</option>
                                        <option value="best-selling">Best Selling</option>
                                        <option value="title-ascending">Alphabetically ( A-Z )</option>
                                        <option value="title-descending">Alphabetically ( Z-A )</option>
                                        <option value="price-ascending">Price, low to high</option>
                                        <option value="price-descending">Price, high to low</option>
                                        <option value="created-ascending">Date, old to new</option>
                                        <option value="created-descending">Date, new to old</option>
                                    </select>
                                </div>
                                <div className="filter-right d-flex align-items-center gap-10">
                                    <p className="total-products mb-0 ">21 Products</p>
                                    <div className="grid d-flex align-items-center gap-10">
                                        <img onClick={() => { setGrid(2) }} className='d-block img-fluid ' src={gr4} alt="grid" />
                                        <img onClick={() => { setGrid(4) }} className='d-block img-fluid ' src={gr3} alt="grid" />
                                        <img onClick={() => { setGrid(6) }} className='d-block img-fluid ' src={gr2} alt="grid" />
                                        <img onClick={() => { setGrid(12) }} className='d-block img-fluid ' src={gr} alt="grid" />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="product-list pb-5 ">
                            <div className="d-flex flex-wrap justify-content-between  gap-15">
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>



        </>
    )
}

export default OurStore
