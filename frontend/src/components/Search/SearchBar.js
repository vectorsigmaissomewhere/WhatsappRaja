import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [formData, setFormData] = useState({ query: '' });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, query: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('query', formData.query);

        try {
            const response = await axios.post('http://127.0.0.1:8000/search/', form);
            console.log('Search results:', response.data);
            // Navigate to the `/searched` route and pass the data as state
            navigate('/searched', {
                state: { 
                    results: response.data, 
                    query: formData.query 
                },
            });
            setFormData({ query: '' });
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className='flex flex-col justify-center min-h-[40vh] items-center bg-gradient-to-r from-purple-500 to-pink-500 gap-y-4'>
            <div className='flex flex-row gap-x-9 font-black text-5xl font-sans text-white'>
                <p>Search What Servers</p>
            </div>
            <div className='flex flex-row bg-slate-400 p-4'>
                <FaSearch className='text-white mx-3 my-1 text-2xl' />
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        className='p-2 text-lg rounded flex-grow w-96'
                        onChange={handleInputChange}
                        value={formData.query}
                        placeholder="Enter your search query"
                    />
                    <button className='bg-black text-white px-4 py-2 text-lg rounded ml-2'>
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
