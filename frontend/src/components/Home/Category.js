import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const catRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Fetch categories and tags
  useEffect(() => {
    const fetchCategoriesAndTags = async () => {
      try {
        // Fetch categories
        const categoryResponse = await fetch('http://127.0.0.1:8000/categorylistapi/');
        const categoryData = await categoryResponse.json();
        setCategories(categoryData.map((item) => item.category));

        // Fetch tags
        const tagResponse = await fetch('http://127.0.0.1:8000/toptagsearch/');
        const tagData = await tagResponse.json();
        setTags(tagData.most_common_tags);
      } catch (error) {
        console.error('Error fetching categories or tags:', error);
      }
    };
    fetchCategoriesAndTags();
  }, []);

  // Handle outside click to close dropdown
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

  // Handle redirection on category or tag click
  const handleButtonClick = (type, value) => {
    navigate('/searched', { state: { type, value } });
  };

  return (
    <div className="flex flex-row bg-black text-white font-sans bg-gray-700 gap-x-5">
      {/* Left side */}
      <div className="flex flex-col font-white text-10xl text-2xl font-medium">
        <h2 className="underline underline-offset-8 decoration-blue-950 decoration-4">
          CATEGORIES
        </h2>
        <h2>And</h2>
        <h2 className="underline underline-offset-8 decoration-blue-950 decoration-4">
          POPULAR TAGS
        </h2>
      </div>
      {/* Right side */}
      <div>
        {/* Categories */}
        <div className="bg-black gap-x-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-stone-400 text-1xl font-medium px-1 py-1 mx-1 my-1 rounded-lg"
              onClick={() => handleButtonClick('category', category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Tags */}
        <div className="bg-black gap-x-10">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="bg-teal-700 text-sm font-semibold px-1 py-1 mx-1 my-1 rounded-lg"
              onClick={() => handleButtonClick('tag', tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
