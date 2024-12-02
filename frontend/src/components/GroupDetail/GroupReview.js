import React from 'react'
import { FaStar } from 'react-icons/fa';

const GroupReview = () => {
  return (
    <div className='bg-indigo-400 py-10 text-white'>
    <div className='flex flex-col justify-center items-center'>
      <div className='text-3xl font-bold font-sans'>
        <h2>Ratings & Reviews</h2>
      </div>
      <div className='flex flex-col my-4'>
        <div className="flex flex-row justify-items-end gap-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
        <div className='flex justify-center items-center text-3xl font-sans my-4'>
          <h2>5.0</h2>
        </div>
        <div className='flex justify-center items-center text-3xl'>3 reviews</div>
      </div>
    </div>
    </div>
  )
}

export default GroupReview
