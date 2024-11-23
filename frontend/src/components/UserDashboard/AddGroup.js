import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { decodeToken } from '../../Utils/authtoken';


const AddGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [language, setLanguage] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tags, setTags] = useState("");
  const [nsfw, setNsfw] = useState(false);
  const [description, setDescription] = useState("");
  const [groupImage, setGroupImage] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [joinLink, setJoinLink] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const token = localStorage.getItem('authToken');
  const decodedToken = decodeToken(token);

  // fetching all the category
  const fetchCategoryData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/categorylistapi');
      setCategory(response.data);
    } catch (err) {
      console.log("Beta tune backend ka sever on kiya hai ki nahi");
    }
  };
  useEffect(() => {
    fetchCategoryData();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // fetching all the language 
  const fetchLanguageDate = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/languagelistapi');
      setLanguage(response.data);
    } catch (err) {
      console.log("Beta tune backend ka sever on kiya hai ki nahi");
    }
  };
  useEffect(() => {
    fetchLanguageDate();
  }, []);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  }

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

  //adding group 
  const handleGroupSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user", decodedToken.user_id);
    formData.append("group_name", groupName);
    formData.append("language", selectedLanguage);
    formData.append("tags", tags);
    formData.append("category", selectedCategory);
    formData.append("nsfw", nsfw);
    formData.append("description", description);
    formData.append("group_image", groupImage);
    formData.append("qr_code", qrCode);
    formData.append("whatsapplink", joinLink);
    formData.append("created_at", new Date().toISOString());
    formData.append("updated_at", new Date().toISOString());
    console.log("This is the data, that is been sent");
    console.log(decodedToken?.user_id, groupName, selectedLanguage, selectedCategory, tags, nsfw, description, joinLink,new Date().toISOString());

    const config = {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
  };
    try {
      const response = await axios.post('http://127.0.0.1:8000/wgroupapi/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log(response.data);
      // Reset form
      setGroupName("");
      setSelectedLanguage("");
      setSelectedCategory("");
      setTags("");
      setNsfw(false);
      setDescription("");
      setGroupImage(null);
      setQrCode(null);
      setJoinLink("");
      setSuccessMessage("Your data has been sent successfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting group details:", error);
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
            <form onSubmit={handleGroupSubmit}>
              {successMessage && (
                <div className="bg-green-500 text-white p-4 mt-4 rounded">
                  {successMessage}
                </div>
              )}
              <div>
                {/* Group Name */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="groupName" className="py-2 text-lg">
                    Add Group Name
                  </label>
                  <input
                    id="groupName"
                    className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700" value={groupName} onChange={(e) => setGroupName(e.target.value)} required
                  />
                </div>

                <select
                  id="language"
                  className="form-select shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)} // Handle change correctly
                >
                  {language.map((option, index) => (
                    <option key={index} value={option.id}> {/* Use option.id or another unique value */}
                      {option.language}
                    </option>
                  ))}
                </select>

                <select
                  id="category"
                  className="form-select shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {category.map((option, index) => (
                    <option key={index} value={option.id}>
                      {option.category}
                    </option>
                  ))}
                </select>

                {/* Tags */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="tags" className="py-2 text-lg">
                    Select 5 Tags
                  </label>
                  <input
                    id="tags"
                    className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700" value={tags} onChange={(e) => setTags(e.target.value)} required
                  />
                </div>

                {/* NSFW */}
                <div className="flex items-center mx-4">
                  <input
                    type="checkbox"
                    id="nsfw"
                    checked={nsfw} // Use checked instead of value
                    onChange={(e) => setNsfw(e.target.checked)} // Update state with checked
                    className="py-2"
                  />
                  <label htmlFor="nsfw" className="mx-2 py-2">
                    NSFW
                  </label>
                </div>

                {/* Group Description */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="description" className="py-2 text-lg">
                    Group Description
                  </label>
                  <textarea
                    id="description"
                    className="materialize-textarea shadow border rounded w-1/2 py-2 px-3 text-gray-700"
                    style={{ height: '200px' }} value={description} onChange={(e) => setDescription(e.target.value)} required
                  />
                </div>
                <input
                  id="groupImage"
                  type="file"
                  onChange={(e) => setGroupImage(e.target.files[0])}
                  className="block w-1/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                />

                <input
                  id="qrImage"
                  type="file"
                  onChange={(e) => setQrCode(e.target.files[0])}
                  className="block w-1/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                />


                {/* WhatsApp Join Link */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="joinLink" className="py-2 text-lg">
                    WhatsApp Join Link
                  </label>
                  <input
                    id="joinLink" value={joinLink} onChange={(e) => setJoinLink(e.target.value)} required
                    className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                  />
                </div>
              </div>
              <div className="mx-20 mt-4">
                <button type="submit" className="bg-cyan-500 px-4 py-2 text-white rounded">
                  Submit
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
