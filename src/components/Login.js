import React from 'react'

import '../css/login.css'

import { ChevronLeft, Facebook, Google } from 'react-bootstrap-icons'

const Login = () => {

    return (

        <>

            <div className='container-fluid main row gx-0'>

                <div className='login-details col-lg-6'>



               <div className='back mt-5 ' >
               <a href='#' className='back pl-5' > <ChevronLeft className='icon' size={25} /> Back</a>

               </div>


                    <div className='techu  py-5'>

                        <img className="logo" src="../images/Logo.png" />

                    </div>

                    <div className='form d-flex justify-content-center '>

                        <div>

                            <h5 className='login'>Login</h5>

                            <p className='form-p login'>Enter your account details</p>

                            <form>

                                <input className='input-email' type='email' placeholder=' Email' /> <br />

                                <input className='input-pwd' type='password' placeholder=' Passcode' />

                                <p className='forgot  mt-3' style={{ paddingLeft: '284px' }}>Forgot passcode?</p>



                            </form>

                            <div className='d-flex justify-content-evenly'><button className='login-btn  mt-5 ms-5  px-5 py-2 '>Login</button></div>



                        </div>

                    </div>



                    <div className=' login-with d-flex justify-content-center '>

                        <div className=' facebook '>

                            <button className='facebook-login m-1 p-2'> <i class="fa-brands fa-facebook-f"></i>Login with facebook</button>

                        </div>

                        <div className=' google '>

                            <button className=' google-login m-1 p-2'><i class="fa-brands fa-google"></i>Login with google</button>

                        </div>

                    </div>

                    <div className='m-5 d-flex justify-content-center'>

                        <p className='signup '>Don’t have an account?<a href='' className='signlink ms-2'><span className='signup-btn' style={{ color: "#C76A97" }}>Sign Up</span></a></p>

                    </div>

                </div>

                <div className='loginImg  col-lg-6 '>

                    <div className=' loginImg-text  p-5' >

                        <p className='login-imgText ' >People begin to become<br /> successful the minute they<br /> decide to be</p>

                    </div>

                    <div className='loginImg-img mb-5 '>

                        <img className='login-Img' src="../images/object.png" />

                    </div>

                </div>

            </div>

        </>

    )

}



export default Login