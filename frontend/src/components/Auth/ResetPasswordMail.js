import React, { useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const ResetPasswordMail = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailsend = {
      email
    }
    axios.post('http://127.0.0.1:8000/api/user/send-reset-password-emai/', emailsend)
      .then(response => {
        setEmail('');
        setErrors({});
        console.log('Email Sent Successfully', response.data);
      })
      .catch(error => {
        console.error('Error adding data:', error);
        if (error.response && error.response.data) {
          setErrors(error.response.data);
        }
      });
  };
  return (
    <div>
      <div className='min-h-screen flex flex-col justify-center items-center bg-gray-800'>
        <div className='flex flex-col bg-gray-500 p-8 rounded'>
          <h2 className='flex justify-center items-center text-lg'>Reset Password</h2>
          {errors && <ul>
            {Object.keys(errors).map((key, index) => (
              <li className='bg-red-500' key={index}>{`${key}: ${errors[key]}`}</li>
            ))}
          </ul>}
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='py-2 text-lg'>Email Address</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700' />
            </div>
            <div className='mb-4'>
              <button type='submit' className='bg-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-white'>Send Mail</button>
            </div>
          </form>
          <div className='mt-4 text-center'>
            <p>Already have an account?</p>
            <Link to={"/login"}><p className='text-blue-900 cursor-pointer'>Login</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordMail
