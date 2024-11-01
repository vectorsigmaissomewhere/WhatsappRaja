import React from 'react'
import { FaStar } from 'react-icons/fa';

const ActiveParty = () => {
  return (
    <div className='bg-slate-600'>
      {/*top part*/}
      <div className='flex justify-between mx-20'>
        <h1 className='flex flex-col font-black text-10xl text-2xl font-medium font-sans my-10 text-white'>TOP ACTIVE SERVERS</h1>
        <button className='bg-transparent font-sans text-1xl font-bold border-2 border-white hover:border-cyan-500 hover:text-cyan-500 my-10 text-white'>ALL DISCORD SERVERS</button>
      </div>
      {/*bottom part */}
      <div>
        <div>
            <div>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p>(14 reviews)</p>
            </div>
            <div>
                <h2>detail div</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveParty
