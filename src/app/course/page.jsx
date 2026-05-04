'use client';

import AnimatedCard from '@/components/AnimatedCard';
import Card from '@/components/Card';
import React, { useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const loadCourses = async () => {
      const res = await fetch(
        'https://skill-sphere-phi-nine.vercel.app/courses.json'
      );
      const data = await res.json();
      setCourses(data);
    };

    loadCourses();
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatedCard>
      <div className="bg-gradient-to-br from-blue-300 via-blue-100 to-blue-200 min-h-screen">
        <div className="text-center space-y-4 py-10">
          <h2 className="text-4xl font-bold underline">Our All Courses</h2>
          <p className="font-semibold text-gray-500">
            Upgrade Your Skills. Advance Your Future.
          </p>

          <div className="flex justify-center mt-4">
            <div className="flex shadow-md rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search courses..."
                className="px-4 py-2 w-62.5 md:w-87.5 focus:outline-none bg-blue-100"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button
                onClick={() => setQuery(search)}
                className="bg-blue-500 text-white px-5 hover:bg-blue-600 transition"
              >
                Search
              </button>
            </div>
          </div>
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setSearch('');
              }}
              className="px-3 text-gray-500 hover:text-red-500 text-3xl container mx-auto"
              title="Back to all courses"
            >
              <IoMdArrowRoundBack />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto pb-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Card course={course} key={course.id} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <div className="text-6xl mb-4 animate-bounce">🔍</div>

              <h2 className="text-2xl font-semibold text-gray-700">
                No Courses Found
              </h2>

              <p className="text-gray-500 mt-2 text-center max-w-md">
                We couldnt find any courses matching your search. Try using
                different keywords or explore all courses.
              </p>

              <button
                onClick={() => {
                  setQuery('');
                  setSearch('');
                }}
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 flex gap-2 items-center transition"
              >
                <IoMdArrowRoundBack /> Back to All Courses
              </button>
            </div>
          )}
        </div>
      </div>
    </AnimatedCard>
  );
};

export default CoursePage;
