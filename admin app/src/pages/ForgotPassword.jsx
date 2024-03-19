import React from 'react'
import CustomInput from '../components/CustomInput'

const ForgotPassword = () => {
    return (
        <div className="py-5 d-flex justify-content-center align-items-center " style={{ background: "#ffd333", minHeight: "100vh" }} >
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <h3 className='title'>Forgot Password</h3>
                <p>Please enter your registered email to get reset password link.</p>
                <form action="">
                    <CustomInput type='email' label='Email Address' id='new_email' />
                    <button
                        className='border-0 px-3 py-2 text-white fw-bold w-100 '
                        style={{ background: "#ffd333" }}
                        type='submit'
                    >
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
