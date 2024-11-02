import React from 'react'
import { FaStar } from 'react-icons/fa';
import serverpic from '../images/lanadelrey.jpg';

const ActiveParty = () => {
  return (
    <div className='flex flex-col bg-slate-600'>
      {/*top part*/}
      <div className='flex justify-between mx-20'>
        <h1 className='flex flex-col font-black text-10xl text-2xl font-medium font-sans my-10 text-white'>TOP ACTIVE SERVERS</h1>
        <button className='bg-transparent font-sans text-1xl font-bold border-2 border-white hover:border-cyan-500 hover:text-cyan-500 my-10 text-white'>ALL DISCORD SERVERS</button>
      </div>
      {/*bottom part */}
      <div className='flex flex-row justify-between	mx-14'>
        <div className='bg-orange-500 w-80'>
          <div className='flex flex-row justify-items-end items-end'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(14 reviews)</p>
          </div>
          <div>
            <div className='flex flex-row'>
              <img src={serverpic} alt="serverpic" className="h-10 w-auto rounded-xl mr-2" />
              <div>
                <h2>Ecom warriors</h2>
                <button>9891 user</button>
                <button>category name</button>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-orange-500 w-80'>
          <div className='flex flex-row justify-items-end'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(14 reviews)</p>
          </div>
          <div>
            <div className='flex flex-row'>
              <img src={serverpic} alt="serverpic" className="h-10 w-auto rounded-xl mr-2" />
              <div>
                <h2>Ecom warriors</h2>
                <button>9891 user</button>
                <button>category name</button>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-orange-500 w-80'>
          <div className='flex flex-row justify-items-end'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(14 reviews)</p>
          </div>
          <div>
            <div className='flex flex-row'>
              <img src={serverpic} alt="serverpic" className="h-10 w-auto rounded-xl mr-2" />
              <div>
                <h2>Ecom warriors</h2>
                <button>9891 user</button>
                <button>category name</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveParty
