import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errormessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const oldUser = {
      email,
      password
    }
    axios.post('http://127.0.0.1:8000/api/user/login/', oldUser)
      .then(response => {
        setEmail('');
        setPassword('');
        setErrorMessage('');
        setErrors({});
        console.log('User Login Successfully', response.data);
        const { token, user } = response.data;
        console.log('User logged in successfully:', user);
        localStorage.setItem('authToken', token.access);
        console.log(token.access)
        navigate('/');
      })
      .catch(error => {
        console.error('Error adding data:', error);
        setErrorMessage('Login failed. Please try again');
        if (error.response && error.response.data) {
          setErrors(error.response.data);
        }
      });
  };
  return (
    <div>
      <div className='min-h-screen flex flex-col justify-center items-center bg-gray-800'>
        <div className='flex flex-col bg-gray-500 p-8 rounded'>
          <h2 className='flex justify-center items-center text-lg'>Login</h2>
          {errormessage &&
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span class="block sm:inline">{errormessage}</span>
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
              </span>
            </div>
          }
          {errors && <ul>
            {Object.keys(errors).map((key, index) => (
              <li className='bg-red-500' key={index}>{`${key}: ${errors[key]}`}</li>
            ))}
          </ul>}

          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='py-2 text-lg'>Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700' required />
            </div>
            <div className='mb-4'>
              <label className='py-2 text-lg'>Password</label>
              <input type='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700' required />
            </div>
            <div className='mb-4'>
              <button type='submit' className='bg-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-white'>Login</button>
            </div>
          </form>
          <div className='mt-4 text-center'>
            <p>Don't have an account?</p>
            <Link to={"/register"}><p className='text-blue-500 cursor-pointer'>Register</p></Link>
          </div>
          <div className='mt-4 text-end'>
            <Link to={"/resetpassmail"}><p className='text-blue-500 cursor-pointer'>Forgotten Password</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
