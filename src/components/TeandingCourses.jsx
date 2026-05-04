'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar, FaUsers } from 'react-icons/fa';
import { Spinner } from '@heroui/react';
import Marquee from 'react-fast-marquee';

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

        setCourses(Array.isArray(data) ? data.slice(0, 10) : []);
      } catch (error) {
        console.log(error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <section className="py-16  bg-linear-to-b from-blue-200 to-blue-200 relative overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">🔥 Trending Courses</h2>
        <p className="text-gray-500 mt-2">Most popular courses right now</p>
      </div>

      <div className="absolute left-0 top-0 h-full w-40 bg-linear-to-r from-blue-200/80 to-transparent z-10"></div>

      <div className="absolute right-0 top-0 h-full w-40 bg-linear-to-l from-blue-200/80 to-transparent z-10"></div>

      <Marquee pauseOnHover speed={100} gradient={false}>
        {courses.map((course, i) => (
          <div
            key={i}
            className="mx-4 w-70 bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
          >
            <div className="relative h-40 w-full bg-gray-100 overflow-hidden">
              <Image
                src={
                  course?.image ||
                  'https://via.placeholder.com/400x300.png?text=Course'
                }
                alt={course?.title || 'course'}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            <div className="p-4 space-y-2">
              <h3 className="font-bold text-lg line-clamp-1">
                {course?.title}
              </h3>

              <p className="text-sm text-gray-500">
                Instructor: {course?.instructor}
              </p>

              <div className="flex justify-between items-center text-sm">
                <span className="flex items-center gap-1 text-gray-600">
                  <FaUsers /> {course?.students || '1K+'}
                </span>

                <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                  <FaStar /> {course?.rating || '4.8'}
                </span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TrendingCourses;
