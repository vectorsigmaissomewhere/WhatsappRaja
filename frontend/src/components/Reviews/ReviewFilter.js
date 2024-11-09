import React from 'react'
import Switch from '@mui/material/Switch';

const ReviewFilter = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
      <div className='flex justify-center items-center bg-slate-600'>
                <div className='flex flex-row text-white'>
                    <Switch {...label} defaultChecked />
                    <h2>NSFW</h2>
                </div>
        </div>
  )
}

export default ReviewFilter
