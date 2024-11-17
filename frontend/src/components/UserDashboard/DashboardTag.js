import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardTag = () => {
  const [profile, setProfile] = useState(null);
  const [profilename, setProfileName] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('No auth token found.');
        return;
      }

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user/profile/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
        const email = response.data.email || '';
        const profileName = email.split('@')[0];
        setProfileName(profileName);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []); 

  if (!profile) {
    return (
      <div className='flex flex-col justify-center min-h-[40vh] items-center bg-gradient-to-r from-purple-500 to-pink-500 gap-y-4'>
        <div className='flex flex-row gap-x-9 font-black text-5xl font-sans text-white'>
          <p>DASHBOARD</p>
        </div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center min-h-[40vh] items-center bg-gradient-to-r from-purple-500 to-pink-500 gap-y-4'>
      <div className='flex flex-row gap-x-9 font-black text-5xl font-sans text-white'>
        <p>DASHBOARD</p>
      </div>
      <div>
        {profilename && <h2>{profilename} is back</h2>}
      </div>
    </div>
  );
};

export default DashboardTag;
