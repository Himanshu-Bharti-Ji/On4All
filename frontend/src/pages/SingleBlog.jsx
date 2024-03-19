// importing images
import blog_1 from "../images/blog-1.jpg"

import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";
import Container from '../components/Container';




const SingleBlog = () => {
    return (
        <>
            <Meta title={"On4All | Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />

            <Container class1="blog-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3 '>
                            <h3 className="filter-title">Find By Categories</h3>
                            <div>
                                <ul className='ps-0 mb-0 '>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row blog-page-card">
                            <div className="col-12">
                                <div className="single-blog-card">
                                    <h4 className='title mb-4'>A beautiful sunday morning renaissance</h4>
                                    <div className="blog-card">
                                        <div className="card-image">
                                            <img className='img-fluid w-100' src={blog_1} alt="blog image" />
                                        </div>
                                        <div className="blog-content mt-3 pb-0 mb-0 ">
                                            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex atque odio exercitationem amet quia nesciunt ad, fuga libero quae. Commodi optio laborum modi nemo ipsum deleniti sint quod id non, autem distinctio soluta recusandae ipsa veniam explicabo quaerat nobis aliquam quas dignissimos, nostrum ducimus tempore! Repellendus temporibus dolores qui. Esse eligendi consequuntur ea perferendis.</p>
                                            <p className='date mb-0 '>11 Feb, 2024</p>
                                        </div>
                                        <div className="back d-flex align-items-center ">
                                            <Link to={"/blogs"} className='fs-4 ' >< IoArrowBackOutline className='mt-0' /></Link>
                                            <Link to={"/blogs"} className='ms-2'>Go to blogs</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>


        </>
    )
}

export default SingleBlog
