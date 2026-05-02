'use client';

import Card from '@/components/Card';
import React, { useEffect, useState } from 'react';

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
              className="px-4 py-2 w-62.5 md:w-87.5 focus:outline-none"
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto pb-10">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Card course={course} key={course.id} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No courses found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
