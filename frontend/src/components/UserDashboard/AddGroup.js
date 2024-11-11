import React from 'react'

const AddGroup = () => {
  return (
    <div className='bg-gray-500 text-white'>
      <div className='mx-20'>
        <button className='bg-cyan-500 px-1 py-1'>Add Group</button>
      </div>
      <div>
        <form>
          <div>
            <div>
              <label>Add Group Name</label>
              <input className='shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700'/>
            </div>
            <div>
              <label>Language</label>
              
            </div>
            <div>
              whatsapp group categories
            </div>
            <div>
              tags
            </div>
            <div>
              nsfw tick 
            </div>
            <div>
              description
            </div>
            <div>
              whatsapp qr code image
            </div>
            <div>
              whatsapp link
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddGroup
