import React, { useState, useEffect, useRef } from 'react';

const AddReview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null); 

  const toggleDropdown = () => setIsOpen(!isOpen);

  const [formData, setFormData] = useState({

  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const handleGroupSubmit = async (e) => {
 
  };


  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-red-500">
      <div className="flex justify-center items-center">
        <button
          onClick={toggleDropdown}
          ref={buttonRef}
          className="bg-black text-white text-2xl rounded ml-2 my-5 px-8 py-4"
        >
          Add Review
        </button>
      </div>
      {isOpen && (
        <div ref={dropdownRef} >
          <form onSubmit={handleGroupSubmit}>
              {/* Language */}
              <div className='flex flex-col justify-center items-center'>
              <label htmlFor="description" className="py-2 text-xl mx-4 text-white">Select Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="form-select shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 my-2 mx-4"
                required
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              </div>

              {/* Description */}
              <div className="flex flex-col mx-4 justify-center items-center">
                <label htmlFor="description" className="py-2 text-xl text-white">Group Review</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 h-40"
                />
              </div>
              <div className="py-2 mx-20 mt-4 bg-white flex">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Add Group"}
                </button>
              </div>
            </form>
        </div>
      )}
    </div>
  );
};

export default AddReview;
