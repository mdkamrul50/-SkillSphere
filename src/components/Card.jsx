import React from 'react';
import { FaStar } from 'react-icons/fa';


const Card = ({ course }) => {
  return (
    <div className="bg-blue-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col grow">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1 font-bold bg-green-200 w-27 px-1 rounded-full">
          {course.instructor}
        </p>

        <div className="flex items-center gap-2 mt-3 bg-blue-50 p-1 rounded-xl text-end ">
          <FaStar className="text-yellow-400" />
          <span className="font-medium text-gray-700">{course.rating}</span>
        </div>

        <div className="mt-auto">
          <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
             View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
