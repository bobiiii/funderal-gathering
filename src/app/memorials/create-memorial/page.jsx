"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateMemorialForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    deceasedName: "",
    birthDate: "",
    deathDate: "",
    biography: "",
    organizerName: "",
    organizerEmail: "",
    organizerRelation: "Family", // Default value
    isPublic: true,
  });
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.deceasedName.trim()) {
      newErrors.deceasedName = "Deceased name is required";
    }
    
    if (!formData.organizerName.trim()) {
      newErrors.organizerName = "Your name is required";
    }
    
    if (!formData.organizerRelation.trim()) {
      newErrors.organizerRelation = "Relation is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    const formDataToSend = new FormData();
    formDataToSend.append("deceasedName", formData.deceasedName);
    formDataToSend.append("birthDate", formData.birthDate);
    formDataToSend.append("deathDate", formData.deathDate);
    formDataToSend.append("biography", formData.biography);
    formDataToSend.append("organizerName", formData.organizerName);
    formDataToSend.append("organizerEmail", formData.organizerEmail);
    formDataToSend.append("organizerRelation", formData.organizerRelation);
    formDataToSend.append("isPublic", formData.isPublic.toString());
    
    if (image) {
      formDataToSend.append("image", image);
    }

    try {
      const response = await fetch("/api/memorials/add", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      
      if (response.ok) {
        router.push(`/memorials/${result.data.accessCode}`);
      } else {
        alert(result.message || "Error creating memorial");
      }
    } catch (error) {
      alert("An error occurred while creating the memorial");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (

    <div className="my-10 br max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Create a Memorial</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Deceased Information Section */}
        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Deceased Information</h2>
          
          <div className="mb-4">
            <label htmlFor="deceasedName" className="block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              id="deceasedName"
              name="deceasedName"
              value={formData.deceasedName}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.deceasedName ? 'border-red-500' : ''}`}
            />
            {errors.deceasedName && <p className="mt-1 text-sm text-red-600">{errors.deceasedName}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
                Birth Date
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              />
            </div>
            
            <div>
              <label htmlFor="deathDate" className="block text-sm font-medium text-gray-700">
                Death Date
              </label>
              <input
                type="date"
                id="deathDate"
                name="deathDate"
                value={formData.deathDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label htmlFor="biography" className="block text-sm font-medium text-gray-700">
              Biography
            </label>
            <textarea
              id="biography"
              name="biography"
              rows={3}
              value={formData.biography}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              placeholder="Share the life story, achievements, and memories of your loved one..."
            />
          </div>
          
          <div className="mt-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>
        </div>
        
        {/* Organizer Information Section */}
        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Your Information</h2>
          
          <div className="mb-4">
            <label htmlFor="organizerName" className="block text-sm font-medium text-gray-700">
              Your Full Name *
            </label>
            <input
              type="text"
              id="organizerName"
              name="organizerName"
              value={formData.organizerName}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.organizerName ? 'border-red-500' : ''}`}
            />
            {errors.organizerName && <p className="mt-1 text-sm text-red-600">{errors.organizerName}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="organizerEmail" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="organizerEmail"
              name="organizerEmail"
              value={formData.organizerEmail}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="organizerRelation" className="block text-sm font-medium text-gray-700">
              Your Relation to the Deceased *
            </label>
            <select
              id="organizerRelation"
              name="organizerRelation"
              value={formData.organizerRelation}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border ${errors.organizerRelation ? 'border-red-500' : ''}`}
            >
              <option value="Family">Family</option>
              <option value="Friend">Friend</option>
              <option value="Colleague">Colleague</option>
              <option value="Other">Other</option>
            </select>
            {errors.organizerRelation && <p className="mt-1 text-sm text-red-600">{errors.organizerRelation}</p>}
          </div>
        </div>
        
        {/* Privacy Settings */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="isPublic"
              name="isPublic"
              type="checkbox"
              checked={formData.isPublic}
              onChange={handleChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="isPublic" className="font-medium text-gray-700">
              Make this memorial public
            </label>
            <p className="text-gray-500">Public memorials can be found by anyone. Uncheck to make it private (accessible only with link).</p>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating...
              </>
            ) : "Create Memorial"}
          </button>
        </div>
      </form>
    </div>
  );
}