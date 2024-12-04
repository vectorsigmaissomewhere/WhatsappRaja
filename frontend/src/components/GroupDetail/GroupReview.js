import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const GroupReview = () => {
  const [averageReview, setAverageReview] = useState([]);
  const { group_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('group id from group average review', group_id)
        const response = await axios.get(`http://127.0.0.1:8000/checkreview/${group_id}/`);
        setAverageReview(response.data);
        console.log('Fetched reviews:', response.data);
      } catch (err) {
        console.log('Error fetching data:', err);
      }
    };
    fetchData();
  }, [group_id]);
  return (
    <div className='bg-indigo-400 py-10 text-white'>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-3xl font-bold font-sans'>
          <h2>Ratings & Reviews</h2>
        </div>
        <div className='flex flex-col my-4'>
          <div className="flex flex-row justify-items-end gap-3">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className={index < averageReview.average_rating ? 'text-yellow-500' : 'text-white'}/>
            ))}
          </div>
          <div className='flex justify-center items-center text-3xl font-sans my-4'>
            <h2>{averageReview.average_rating}</h2>
          </div>
          <div className='flex justify-center items-center text-3xl'>
            {averageReview.total_reviews} reviews
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupReview;