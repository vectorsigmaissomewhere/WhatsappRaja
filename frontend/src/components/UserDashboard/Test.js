import React, { useState } from "react";
import axios from "axios";
import { decodeToken } from '../../Utils/authtoken'; // You can get the user_id from decodedToken.user_id

const Test = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const token = localStorage.getItem("authToken"); // Assume token is stored in localStorage
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

    // Append the user_id to the form data
    form.append("user", decodedToken.user_id);

    try {
      const response = await axios.post("http://127.0.0.1:8000/wgroupapi/", form, config);
      setMessage(response.data.msg || "Group added successfully!");
    } catch (error) {
      setMessage(error.response?.data?.error || "Failed to add group.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Group</h2>
      {message && <p className={`mb-4 ${message.includes("Failed") ? "text-red-600" : "text-green-600"}`}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Group Name:
          <input
            type="text"
            name="group_name"
            value={formData.group_name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Language:
          <select
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Nepali">Nepali</option>
            <option value="Hindi">Hindi</option>
            {/* Add more languages as needed */}
          </select>
        </label>
        <label className="block mb-2">
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="family_friends">Family and Friends</option>
            <option value="coding_programming">Coding and Programming</option>
            <option value="health_wellness">Health and Wellness</option>
            {/* Add more categories as needed */}
          </select>
        </label>
        <label className="block mb-2">
          Tags (comma-separated):
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          NSFW:
          <input
            type="checkbox"
            name="nsfw"
            checked={formData.nsfw}
            onChange={handleInputChange}
            className="ml-2"
          />
        </label>
        <label className="block mb-2">
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </label>
        <label className="block mb-2">
          Group Image:
          <input
            type="file"
            name="group_image"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          QR Code:
          <input
            type="file"
            name="qr_code"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          WhatsApp Link:
          <input
            type="url"
            name="whatsapplink"
            value={formData.whatsapplink}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Group"}
        </button>
      </form>
    </div>
  );
};

export default Test;
