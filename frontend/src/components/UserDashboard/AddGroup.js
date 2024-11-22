import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


const AddGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [language, setLanguage] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tags, setTags] = useState("");
  const [nsfw, setNsfw] = useState(false);
  const [description, setDescription] = useState("");
  const [qrCode, setQrCode] = useState(null);
  const [joinLink, setJoinLink] = useState("");

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
  const fetchLanguageDate = async () =>{
    try{
      const response = await axios.get('http://127.0.0.1:8000/languagelistapi');
      setLanguage(response.data);
    }catch(err){
      console.log("Beta tune backend ka sever on kiya hai ki nahi");
    }
  };
  useEffect(() => {
    fetchLanguageDate();
  },[]);

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
            <form onSubmit={handleSubmit}>
              <div>
                {/* Group Name */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="groupName" className="py-2 text-lg">
                    Add Group Name
                  </label>
                  <input
                    id="groupName"
                    className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700" value={groupName} onChange={(e)=>setGroupName(e.target.value)} required 
                  />
                </div>

                {/* Language */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="language" className="py-2 text-lg">
                    Language
                  </label>
                  <select
                    id="language"
                    className="form-select shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                  >
                    {language.map((option, index) => (
                      <option key={index} value={option.language} >
                        {option.language}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Category */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="category" className="py-2 text-lg">
                    Category Name
                  </label>
                  <select
                    id="category"
                    className="form-select shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    {category.map((option, index) => (
                      <option key={index} value={option.category}>
                        {option.category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tags */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="tags" className="py-2 text-lg">
                    Select 5 Tags
                  </label>
                  <input
                    id="tags"
                    className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700"
                  />
                </div>

                {/* NSFW */}
                <div className="flex items-center mx-4">
                  <input
                    type="checkbox"
                    id="nsfw"
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
                    style={{ height: '200px' }}
                  />
                </div>
                {/*WhatsApp Group Image */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="fileInput" className="py-2 text-lg">
                    WhatsApp Group Image
                  </label>
                  <input
                    id="groupImage"
                    type="file"
                    className="block w-1/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                  />
                </div>

                {/* WhatsApp QR Code */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="fileInput" className="py-2 text-lg">
                    WhatsApp QR Code Image
                  </label>
                  <input
                    id="qrImage"
                    type="file"
                    className="block w-1/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                  />
                </div>

                {/* WhatsApp Join Link */}
                <div className="flex flex-col mx-4">
                  <label htmlFor="joinLink" className="py-2 text-lg">
                    WhatsApp Join Link
                  </label>
                  <input
                    id="joinLink"
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
