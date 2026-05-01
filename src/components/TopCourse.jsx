'use client';

import { useEffect, useState } from 'react';

import Card from './Card';

export default function TopCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          'https://skill-sphere-phi-nine.vercel.app/courses.json'
        );
        const data = await res.json();

        const topCourses = data.sort((a, b) => b.rating - a.rating).slice(0, 3);

        setCourses(topCourses);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="py-25 bg-linear-to-b from-blue-200 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our Popular Courses
          </h2>
          <p className="text-gray-500 mt-2">
            Discover our highest rated courses by students
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading courses...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => {
              return <Card course={course} key={course.id}></Card>;
            })}
          </div>
        )}
      </div>
    </section>
  );
}
