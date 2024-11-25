import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { decodeToken } from '../../Utils/authtoken';

const AddGroup = () => {
  // Dropdown states and refs
  const [isOpen, setIsOpen] = useState(false);
  const catRef = useRef(null);
  const buttonRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        catRef.current &&
        !catRef.current.contains(event.target) &&
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

  // Profile button states and refs
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const profileRef = useRef(null);
  const buttonProfileRef = useRef(null);
  const toggleProfile = () => setIsButtonOpen(!isButtonOpen);

  useEffect(() => {
    const handleClickProfileOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        !buttonProfileRef.current.contains(event.target)
      ) {
        setIsButtonOpen(false);
      }
    };

    document.addEventListener('click', handleClickProfileOutside);
    return () => {
      document.removeEventListener('click', handleClickProfileOutside);
    };
  }, [profileRef, buttonProfileRef]);

  // adding group 
  const token = localStorage.getItem('authToken');
  const decodedToken = decodeToken(token);
  const [formData, setFormData] = useState({
    group_name: "",
    language: "",
    category: "",
    tags: "",
    nsfw: false,
    description: "",
    group_image: null,
    qr_code: null,
    whatsapplink: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.files[0],
    }));
  };

  const handleGroupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    form.append("user", decodedToken.user_id);

    try {
      const response = await axios.post("http://127.0.0.1:8000/wgroupapi/", form, config);
      setMessage(response.data.msg || "Group added successfully!");
      setFormData({
        group_name: "",
        language: "",
        category: "",
        tags: "",
        nsfw: false,
        description: "",
        group_image: null,
        qr_code: null,
        whatsapplink: "",
      });
    } catch (error) {
      setMessage(error.response?.data?.error || "Failed to add group.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-500 text-white font-semibold py-6">
        <div className="mx-20">
          <button
            className="bg-cyan-500 px-4 py-2 text-lg rounded"
            onClick={toggleDropdown}
            ref={buttonRef}
          >
            Add Group
          </button>
          <button
            className="bg-cyan-500 px-4 py-2 text-lg rounded ml-4"
            onClick={toggleProfile}
            ref={buttonProfileRef}
          >
            Edit Password
          </button>
        </div>

        {isOpen && !isButtonOpen && (
          <div className="mx-4" ref={catRef}>
            {message && <p className={`mb-4 ${message.includes("Failed") ? "text-red-600" : "text-green-600"}`}>{message}</p>}
            <form onSubmit={handleGroupSubmit}>
              {/* Group Name */}
              <div className="flex flex-col mx-4">
                <label htmlFor="groupName" className="py-2 text-lg">Add Group Name</label>
                <input
                  type="text"
                  name="group_name"
                  value={formData.group_name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700" required
                />
              </div>

              {/* Language */}
              <div className='flex flex-col'>
              <label htmlFor="description" className="py-2 text-lg mx-4">Select Language</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="form-select shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 my-2 mx-4"
                required
              >
                <option value="English">English</option>
                <option value="Nepali">Nepali</option>
              </select>
              </div>

              {/* Category */}
              <div className='flex flex-col'>
              <label htmlFor="description" className="py-2 text-lg mx-4">Select Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form-select shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 my-2 mx-4"
                required
              >
                <option value="family_friends">Family and Friends</option>
                <option value="coding_programming">Coding and Programming</option>
                <option value="health_wellness">Health and Wellness</option>
              </select>
              </div>

              {/* Tags */}
              <div className="flex flex-col mx-4">
                <label htmlFor="tags" className="py-2 text-lg">Select 5 Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                />
              </div>

              {/* NSFW Checkbox */}
              <label className="flex items-center mt-2 mb-2 mx-4 ">
                <input
                  type="checkbox"
                  name="nsfw"
                  checked={formData.nsfw}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                NSFW
              </label>

              {/* Description */}
              <div className="flex flex-col mx-4">
                <label htmlFor="description" className="py-2 text-lg">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                />
              </div>

              {/* File Uploads */}
              <div className="flex flex-col mx-4">
                <label htmlFor="group_image" className="py-2 text-lg">Group Image</label>
                <input
                  type="file"
                  name="group_image"
                  onChange={handleFileChange}
                  className="block w-1/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                />
              </div>

              <div className="flex flex-col mx-4">
                <label htmlFor="qr_code" className="py-2 text-lg">QR Code</label>
                <input
                  type="file"
                  name="qr_code"
                  onChange={handleFileChange}
                  className="block w-1/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                />
              </div>

              <div className="flex flex-col mx-4">
                <label htmlFor="whatsapplink" className="py-2 text-lg">WhatsApp Link</label>
                <input
                  type="text"
                  name="whatsapplink"
                  value={formData.whatsapplink}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                />
              </div>

              <div className="py-2 mx-20 mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Add Group"}
                </button>
              </div>
            </form>
          </div>
        )}
        {isButtonOpen && !isOpen && (
          <div ref={profileRef}>
            <form>
              <div>
                {/* Group Name */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="groupName" className="py-2 text-lg">
                    Enter New Password
                  </label>
                  <input
                    id="newPassword"
                    className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                  />
                </div>
                <div className="flex flex-col mx-4">
                  <label htmlFor="re-newPassword" className="py-2 text-lg">
                    Retype New Password
                  </label>
                  <input
                    id="groupName"
                    className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                  />
                </div>
              </div>
            </form>
            <div className="mx-20 mt-4">
              <button type="submit" className="bg-cyan-500 px-4 py-2 text-white rounded">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddGroup;
