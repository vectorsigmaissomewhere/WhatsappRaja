import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import serverpic from '../../images/lanadelrey.jpg';

const GroupList = () => {
  const [groupList, setGroupList] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('authToken');

  // this function will change the tags that is in comma format into a list 
  const taglist = (tags) => {
    return tags ? tags.split(',') : [];
  };


  useEffect(() => {
    if (!token) {
      setError('Authentication token is missing.');
      return;
    }

    const fetchData = async () => {
      try {
        console.log('Auth Token:', token);
        const response = await axios.get('http://127.0.0.1:8000/wgroupapi/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setGroupList(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch group data.');
      }
    };

    fetchData();
  }, [token]);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-slate-600">
      {groupList.map((group, index) => (
        <div key={index} className="bg-gray-700 text-white text-2xl flex flex-col justify-center items-center h-fit rounded-lg p-4">
          <div className="flex flex-row justify-items-end">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>({group.reviews || 14} reviews)</p>
          </div>
          <div className="flex flex-row mt-4">
            <img src={serverpic} alt="serverpic" className="h-10 w-auto rounded-xl mr-2" />
            <div>
              <h2 className="mx-1">{group.name || 'Ecom Warriors'}</h2>
              <button className="mx-1 bg-indigo-700 px-2 py-1 rounded-lg">{group.user_count || '9891'} users</button>
              <button className="mx-1">{group.category || 'Category name'}</button>
            </div>
          </div>
          {/* Tags */}
          
          <div>
            {taglist(group.tags || '').map((tag, idx) => (
              <button
                key={idx}
                className="text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium"
              >
                {tag.trim()}
              </button>
            ))}
          </div>
          
          <div className="text-base whitespace-pre-line">{group.description}</div>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
