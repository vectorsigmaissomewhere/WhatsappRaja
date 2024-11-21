import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState('');
  const authToken = localStorage.getItem('authToken');

  useEffect(() => {
    if (!authToken) {
      setError('Authentication token is missing.');
      return;
    }

    const fetchData = async () => {
      try {
        console.log('Auth Token:', authToken);
        const response = await axios.get('http://127.0.0.1:8000/pgroupapi/', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setGroups(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch group data.');
      }
    };

    fetchData();
  }, [authToken]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white pb-6 pt-6">
      <h1 className="text-3xl font-bold mb-6">Your Groups</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12">
        {groups.length > 0 ? (
          groups.map((group, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col space-y-4"
            >
              <div className="flex justify-between items-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Group"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <img
                  src="https://via.placeholder.com/80"
                  alt="QR Code"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h2 className="text-xl font-bold">{group.group_name}</h2>
              <p>
                <strong>Language:</strong> {group.language}
              </p>
              <p>
                <strong>Category:</strong> {group.category}
              </p>
              <p>
                <strong>Description:</strong> {group.description}
              </p>
              <p>
                <strong>Tags:</strong> {group.tags}
              </p>
              <p>
                <strong>WhatsApp Link:</strong>{' '}
                <a
                  href={group.whatsapplink}
                  className="text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {group.whatsapplink}
                </a>
              </p>
              <p>
                <strong>Created At:</strong>{' '}
                {new Date(group.created_at).toLocaleString()}
              </p>
              <div className='flex justify-end items end gap-8'>
                <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'>
                  Edit
                </button>
                <button className='bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded'>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-lg">No group data available.</p>
        )}
      </div>
    </div>
  );
};

export default Test;
