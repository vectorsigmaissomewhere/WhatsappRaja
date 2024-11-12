import React, { useState, useEffect, useRef } from 'react'

const AddGroup = () => {
  const options = [
    { label: "Marwadi", value: 1 },
    { label: "Nepali", value: 2 },
  ]
  const category = [
    { label: "Marwadi", value: 1 },
    { label: "Nepali", value: 2 },
  ]

  const [isOpen, setIsOpen] = useState(false);
  const catRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  useEffect(()=>{
    const handleClickOutside = (event) =>{
      if(catRef.current && !catRef.current.contains(event.target)&& !buttonRef.current.contains(event.target)){
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return()=>{
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className='bg-gray-500 text-white font-semibold py-2'>
        <div className='mx-20'>
          <button className='bg-cyan-500 px-1 py-1 text-lg' onClick={toggleDropdown} ref={buttonRef}>Add Group</button>
        </div>
        {isOpen && (
        <div className='mx-4'>
          <form>
            <div>
              <div className='flex flex-col mx-4'>
                <label className='py-2 text-lg'>Add Group Name</label>
                <input className='shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700' />
              </div>
              <div className='flex flex-col mx-4'>
                <label className='py-2 text-lg'>Language</label>
                <select className='form-select shadow apperance-none border rounded w-1/4 py-2 px-3 text-gray-700'>
                  {options.map(option => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className='flex flex-col mx-4'>
                <label className='py-2 text-lg'>Category Name</label>
                <select className='form-select shadow apperance-none border rounded w-1/4 py-2 px-3 text-gray-700'>
                  {category.map(option => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className='flex flex-col mx-4'>
                <label className='py-2 text-lg'>Select 5 Tags</label>
                <input className='shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700' />
              </div>
              <div className='flex flex-row mx-4'>
                <input type="checkbox" className='py-2' />
                <p className='mx-2 py-2'>nsfw</p>
              </div>
              <div className='flex flex-col mx-4'>
                <label className='py-2 text-lg'>Group Description</label>
                <textarea name="description" id="description" className="materialize-textarea w-1/2" style={{ height: '200px' }} />
              </div>
              <div className='flex flex-col mx-4'>
                <label className='py-2 text-lg'>Whatsapp qr code image</label>
                <input class="block w-1/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
              </div>
              <div className='flex flex-col mx-4'>
                <label className='py-2 text-lg'>Whatsapp Join Link</label>
                <input className='shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700' />
              </div>
            </div>
          </form>
          <div className='mx-20'>
            <button>Submit</button>
          </div>
        </div>
         )}
      </div>
    </>
  )
}

export default AddGroup
