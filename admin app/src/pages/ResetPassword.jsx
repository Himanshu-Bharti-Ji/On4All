import React from 'react'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
    return (
        <div className="py-5 d-flex justify-content-center align-items-center " style={{ background: "#ffd333", minHeight: "100vh" }} >
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <h3 className='title'>Reset Password</h3>
                <p>Please create new password for your account.</p>
                <form action="">
                    <CustomInput type='password' label='New Password' id='new_password' />
                    <CustomInput type='password' label='Confirm Password' id='conf_password' />
                    <button
                        className='border-0 px-3 py-2 text-white fw-bold w-100 '
                        style={{ background: "#ffd333" }}
                        type='submit'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
