import React, { useState, useEffect, useRef } from 'react';
import { decodeToken } from '../../Utils/authtoken';
import { useParams } from 'react-router-dom'; 

const AddReview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const { group_id } = useParams(); 
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('authToken');
  const decodedToken = decodeToken(token);

  const [formData, setFormData] = useState({
    wgroup: group_id,
    user: decodedToken.user_id,
    rating: "",
    comment_text: "",
  });

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/wgroupreviewapi/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Review added successfully!");
        setFormData({
          wgroup: group_id,
          user: decodedToken.user_id,
          rating: "",
          comment_text: "",
        });
        setIsOpen(false);
      } else {
        const errorData = await response.json();
        alert(`Failed to add review: ${errorData.detail || "Unknown error"}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

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
        <div ref={dropdownRef}>
          <form onSubmit={handleGroupSubmit}>
            {/* Rating */}
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="rating" className="py-2 text-xl mx-4 text-white">
                Select Rating
              </label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                className="form-select shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 my-2 mx-4"
                required
              >
                <option value="">Select</option>
                {[0, 1, 2, 3, 4, 5].map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col mx-4 justify-center items-center">
              <label htmlFor="comment_text" className="py-2 text-xl text-white">
                Group Review
              </label>
              <textarea
                name="comment_text"
                value={formData.comment_text}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 h-40"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="py-2 mx-20 mt-4 bg-red-500 flex justify-center items-center">
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
