import React from 'react'
import { FaUsers } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import Switch from '@mui/material/Switch';

const SearchedTag = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <div className='flex flex-col justify-center min-h-[60vh] items-center bg-gradient-to-r from-purple-500 to-pink-500 gap-y-4'>
            <div className='flex flex-col gap-x-9 font-black text-5xl font-sans text-white'>
                <div className='flex flex-row gap-x-9'>
                    <FaUsers />
                    <p className='text-4xl'>What</p>
                    <p>Servers</p>
                </div>
                <div className='flex justify-center items-center'>
                    <span role="img" aria-label="namaste">🙏</span>
                </div>
                <div className='flex justify-center items-center'>
                    <p>Rapping</p>
                </div>
            </div>
            <div className='flex flex-row p-4 gap-x-2'>
                <p className='text-lg text-white'>What server tagged with</p>
                <p className='bg-cyan-400 text-lg text-white px-1 py-1'>rapping</p>
            </div>
            <div className='flex gap-x-40'>
                <div className='flex flex-row text-white'>
                    <Switch {...label} defaultChecked />
                    <h2>NSFW</h2>
                </div>
                <div>
                    Showing 1-20 Servers 
                </div>
            </div>
        </div>
    )
}

export default SearchedTag
