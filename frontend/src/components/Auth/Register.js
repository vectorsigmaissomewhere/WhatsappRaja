import React,{useState} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errormessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password !== confirmpassword){
            setErrorMessage('Password do not match');
            return;
        }
        const newUser = {
            email, 
            password,
            password2: confirmpassword,
        }
        axios.post('http://127.0.0.1:8000/api/user/register/', newUser)
            .then(response =>{
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setErrorMessage('');
                setMessage('Registration Successful');
                setErrors({});
                console.log('User registered Successfully', response.data);
            })
            .catch(error => {
                console.error('Error adding data:', error);
                setErrorMessage('Registration failed. Please try again');
                if(error.response && error.response.data){
                    setErrors(error.response.data);
                }
            });
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-gray-800'>
            <div className='flex flex-col bg-gray-500 p-8 rounded'>
            <h2 className='flex justify-center items-center text-lg'>Registration</h2>
            {message && 
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">{message}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M16.707 5.293a1 1 0 0 0-1.414 0L9 11.586 5.707 8.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414z"/>
              </svg>
            </span>
          </div>          
            }
            {errormessage && 
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">{errormessage}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
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
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700' required/>
                </div>
                <div className='mb-4'>
                    <label className='py-2 text-lg'>Password</label>
                    <input type='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700' required/>
                </div>
                <div className='mb-4'>
                    <label className='py-2 text-lg'>Confirm Password</label>
                    <input type='password' id="confirmpassword" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700' required/>
                </div>
                <div className='mb-4'>
                    <button type='submit' className='bg-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-white'>Submit</button>
                </div>
                </form>
                <div className='mt-4 text-center'>
                    <p>Already have an account?</p>
                    <Link to={"/login"}><p className='text-blue-900 cursor-pointer'>Login</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Register
