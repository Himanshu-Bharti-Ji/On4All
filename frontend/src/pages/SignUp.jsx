import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const SignUp = () => {
    return (
        <>
            <Meta title={"On4All | Sign Up"} />
            <BreadCrumb title="Sign Up" />

            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Sign Up</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="text" name='name' placeholder='Full name' />
                                <CustomInput type="email" name='email' placeholder='Email' />
                                <CustomInput type="tel" name='phone' placeholder='Phone No.' />
                                <CustomInput type="password" name='password' placeholder='Password' />

                                <div>
                                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                                        <button className="button border-0 signup">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>


        </>
    )
}

export default SignUp
