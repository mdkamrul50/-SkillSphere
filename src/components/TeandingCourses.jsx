'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar, FaUsers } from 'react-icons/fa';

const TrendingCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          'https://skill-sphere-phi-nine.vercel.app/courses.json'
        );
        const data = await res.json();

        setCourses(data.slice(0, 4)); // only 4 trending courses
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500 font-semibold">
        Loading Trending Courses...
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">
            🔥 Trending Courses
          </h2>
          <p className="text-gray-500 mt-2">Most popular courses right now</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg line-clamp-1">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500">
                  Instructor: {course.instructor}
                </p>

                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1 text-gray-600">
                    <FaUsers /> {course.students || '1K+'}
                  </span>

                  <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                    <FaStar /> {course.rating || '4.8'}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <p className="text-blue-600 font-bold">
                    {course.price || 'Free'}
                  </p>

                  <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
