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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4">Group Data</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="w-3/4">
        {groups.length > 0 ? (
          <ul className="space-y-4">
            {groups.map((group, index) => (
              <li key={index} className="bg-gray-700 p-4 rounded shadow">
                <h2 className="text-xl font-semibold">{group.group_name}</h2>
                <p><strong>Language:</strong> {group.language}</p>
                <p><strong>Category:</strong> {group.category}</p>
                <p><strong>Description:</strong> {group.description}</p>
                <p><strong>Tags:</strong> {group.tags}</p>
                <p><strong>WhatsApp Link:</strong> <a href={group.whatsapplink} className="text-blue-400" target="_blank" rel="noopener noreferrer">{group.whatsapplink}</a></p>
                <p><strong>Created At:</strong> {new Date(group.created_at).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No group data available.</p>
        )}
      </div>
    </div>
  );
};

export default Test;

