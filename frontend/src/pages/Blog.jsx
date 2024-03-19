import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard'
import Container from '../components/Container';

function Blog() {
    return (
        <>
            <Meta title={"On4All | Blogs"} />
            <BreadCrumb title="Blogs" />

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
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Blog
