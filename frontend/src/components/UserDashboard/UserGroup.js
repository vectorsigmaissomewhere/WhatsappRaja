import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import serverpic from '../../images/lanadelrey.jpg';
import axios from 'axios';

const UserGroupCard = ({ groupData, isGroupButton }) => (
    <div className='bg-gray-700 text-white text-lg flex flex-col justify-between items-start h-fit rounded-lg p-4'>
        <div className='flex flex-row items-center mb-4'>
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <p className='ml-2 text-sm'>(14 reviews)</p>
        </div>
        <div className='flex flex-row items-center mb-4'>
            <img src={serverpic} alt="Group Avatar" className="h-12 w-12 rounded-full mr-3" />
            <div>
                <h2 className='font-bold text-xl'>{groupData.group_name || 'Ecom Warriors'}</h2>
                <p className='text-sm'>{groupData.category || 'Category Name'}</p>
                {isGroupButton && (
                    <button className='mt-2 bg-indigo-700 px-3 py-1 rounded-lg text-sm'>Join Group</button>
                )}
            </div>
        </div>
        <div className='flex flex-wrap gap-2'>
            {groupData.tags?.map((tag, index) => (
                <button
                    key={index}
                    className='text-xs px-2 py-1 bg-gray-800 rounded-lg text-sm font-medium'
                >
                    {tag}
                </button>
            ))}
        </div>
    </div>
);

const UserGroup = ({ isGroupButton }) => {
    const [privateGroupData, setPrivateGroupData] = useState([]);
    const [error, setError] = useState(null);

    const fetchGroupData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/pgroupapi/');
            setPrivateGroupData(response.data);
        } catch (err) {
            setError('Failed to load group data. Please try again later.');
        }
    };

    useEffect(() => {
        fetchGroupData();
    }, []);

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-slate-600'>
            {error && <div className="text-red-500 col-span-full">{error}</div>}
            {privateGroupData.length === 0 && !error ? (
                <div className="col-span-full text-center text-white">Loading groups...</div>
            ) : (
                privateGroupData.map((group, index) => (
                    <UserGroupCard key={index} groupData={group} isGroupButton={isGroupButton} />
                ))
            )}
        </div>
    );
};

export default UserGroup;
