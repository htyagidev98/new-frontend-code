import React, { useState } from 'react'
import {FaKey} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import './auth.css';
const ForgetPassword = () => {

  const[inputData, setInputData]= useState({
    email:"",
  })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('forget', inputData);
    setInputData({
      email: "",
    });
  };
  return (
    <div>
      <div className="forget_password pt-5 common_auth_height_con">
         
           <div className="row container-fluid">
             <div className="col-12">
             <div className="forget_data">
               <div className="contact_forget_form">
               <div className="key_data text-center mx-auto d-table">
               <span className='d-flex align-items-center justify-content-center'><FaKey /> </span>
               </div>
               
                 <h3 className='text-center'>Forgot password?</h3>
                 <p className='text-center'>No worries, we’ll send you reset instructions.</p>
                 <form onSubmit={(e) => handleSubmit(e)}>
                 <div className="form-group mb-3">
                 <label htmlFor="email">Email</label>
                 <input
                   type="email"
                   name="email"
                   id="email"
                   className="form-control"
                   placeholder="Enter Email"
                   required
                   autoComplete="off"
                   onChange={handleInput}
                   value={inputData.email}
                 />
               </div>

               <button className="btn btn-black d-block w-100 mt-2 mb-2" type="submit">Reset Password</button>

                 </form>
                 <div className="text-center">
                 <NavLink className='nav-link' to='/'><span> <BiArrowBack/> Back to login</span></NavLink>
                 </div>
               </div>

             </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default ForgetPassword