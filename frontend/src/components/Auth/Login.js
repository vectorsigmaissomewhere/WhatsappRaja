import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='min-h-screen flex flex-col justify-center items-center bg-gray-800'>
            <div className='flex flex-col bg-gray-500 p-8 rounded'>
            <h2 className='flex justify-center items-center text-lg'>Login</h2>
                <div className='mb-4'>
                    <label className='py-2 text-lg'>Email</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700' />
                </div>
                <div className='mb-4'>
                    <label className='py-2 text-lg'>Password</label>
                    <input type='password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700' />
                </div>
                <div className='mt-4 text-center'>
                    <p>Don't have an account?</p>
                    <p className='text-blue-500 cursor-pointer'>Register</p>
                </div>
                <div className='mt-4 text-end'>
                <p className='text-blue-500 cursor-pointer'>Forgotten Password</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
