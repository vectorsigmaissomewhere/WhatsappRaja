import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const GroupReviewList = () => {
    const [reviewList, setReviewList] = useState([]);
    const { group_id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('group id from group review list',group_id)
                const response = await axios.get(`http://127.0.0.1:8000/reviewdetailapi/${group_id}/`);
                setReviewList(response.data);
                console.log('Fetched reviews:', response.data);
            } catch (err) {
                console.log('Error fetching data:', err);
            }
        };
        fetchData();
    }, [group_id]);
    
    return (
        <div className='bg-gray-700'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-slate-600 mx-20">
        {reviewList.map((review, index) => (
            <div  key={index} className='className="bg-gray-700 text-white text-2xl flex flex-col justify-center items-center h-fit rounded-lg p-4 bg-red-400'>
                <div className="flex flex-row justify-items-end">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='flex justify-end w-full text-base italic'>
                    <h2>{review.created_at}</h2>
                </div>
                <div className='font-serif'>
                    <p>{review.comment_text}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}

export default GroupReviewList
