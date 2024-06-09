"use client"; // This marks the component as a Client Component

import { useState } from "react";
import moment from "moment";

export default function BlogCard({ blog }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxDescriptionLength = 100; // Customize the length as needed

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const formatDate = (date) => {
    return moment(date).format("MMMM Do, YYYY");
  };

  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-600 mb-4">
        {showFullDescription
          ? blog.description
          : `${blog.description.substring(0, maxDescriptionLength)}...`}
        {blog.description.length > maxDescriptionLength && (
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleDescription}
          >
            {showFullDescription ? " Show Less" : " Read More"}
          </span>
        )}
      </p>
      <p className="text-sm text-gray-500">{`Created on: ${formatDate(
        blog.createdAt
      )}`}</p>
    </div>
  );
}
