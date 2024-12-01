import React from 'react'
import { FaStar } from 'react-icons/fa';

const GroupReview = () => {
  return (
    <div>
      <div>
        <h2>Ratings & Reviews</h2>
      </div>
      <div>
        <div className="flex flex-row justify-items-end">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
        <div>
          <h2>5.0</h2>
        </div>
        <div>3 reviews</div>
      </div>
    </div>
  )
}

export default GroupReview
