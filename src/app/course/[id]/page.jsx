'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaStar, FaUserAlt, FaClock, FaPlayCircle } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { BiBookOpen } from 'react-icons/bi';
import { HiSparkles } from 'react-icons/hi';
import { Spinner } from '@heroui/react';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const loadCourse = async () => {
      const res = await fetch(
        'https://skill-sphere-phi-nine.vercel.app/courses.json'
      );
      const data = await res.json();
      const singleCourse = data.find((c) => c.id == id);
      setCourse(singleCourse);
    };
    loadCourse();
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-200 via-blue-100 to-blue-300 text-blue-700 text-xl font-semibold">
        <div className="flex flex-col items-center gap-2">
          <Spinner size="xl" />
          
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-200 via-blue-50 to-blue-300 py-10 px-4">
      <div className="container mx-auto mb-6">
        <Link href="/course">
          <button className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition font-medium">
            <IoMdArrowRoundBack className="text-xl" /> Back
          </button>
        </Link>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 bg-white/40 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/30">
        <div className="relative group">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-85 object-cover rounded-2xl shadow-lg transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-blue-900/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>
        </div>

        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-blue-800 flex items-center gap-2">
            <HiSparkles className="text-yellow-400" />
            {course.title}
          </h1>

          <p className="text-blue-900/80 leading-relaxed">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-3">
            <span className="flex items-center gap-2 bg-blue-100/70 text-blue-800 px-4 py-1 rounded-full text-sm border border-blue-200">
              <FaUserAlt className="text-blue-600" /> {course.instructor}
            </span>

            <span className="flex items-center gap-2 bg-yellow-100/70 text-yellow-700 px-4 py-1 rounded-full text-sm border border-yellow-200">
              <FaStar className="text-yellow-500" /> {course.rating}
            </span>
            {/* 
            <span className="flex items-center gap-2 bg-green-100/70 text-green-700 px-4 py-1 rounded-full text-sm border border-green-200">
              <MdOutlineAttachMoney className="text-green-600" /> {course.price}
            </span> */}

            <span className="flex items-center gap-2 bg-purple-100/70 text-purple-700 px-4 py-1 rounded-full text-sm border border-purple-200">
              <FaClock className="text-purple-600" />{' '}
              {course.duration || 'Self-paced'}
            </span>
          </div>

          <button className="mt-6 px-6 py-3 bg-linear-to-r from-blue-600 via-blue-500 to-blue-700 text-white rounded-xl shadow-lg hover:scale-105 transition font-semibold">
            Enroll Now
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-10 grid md:grid-cols-2 gap-6">
        <div className="bg-white/30 backdrop-blur-2xl p-6 rounded-2xl shadow-xl border border-white/30 hover:shadow-2xl hover:scale-105 duration-400 transition">
          <h2 className="text-xl font-semibold mb-5 text-blue-800 flex items-center gap-2">
            <BiBookOpen className="text-blue-600 text-2xl" />
            Course Curriculum
          </h2>

          <ul className="space-y-4 text-blue-900/80">
            <li className="flex items-center gap-2 hover:translate-x-1 transition cursor-pointer">
              <FaPlayCircle className="text-blue-600" />
              Introduction & Setup
            </li>

            <li className="flex items-center gap-2 hover:translate-x-1 transition cursor-pointer">
              <FaPlayCircle className="text-blue-600" />
              Core Concepts Deep Dive
            </li>

            <li className="flex items-center gap-2 hover:translate-x-1 transition cursor-pointer">
              <FaPlayCircle className="text-blue-600" />
              Real Project Build
            </li>

            <li className="flex items-center gap-2 hover:translate-x-1 transition cursor-pointer">
              <FaPlayCircle className="text-blue-600" />
              Advanced Techniques
            </li>

            <li className="flex items-center gap-2 hover:translate-x-1 transition cursor-pointer">
              <FaPlayCircle className="text-blue-600" />
              Final Project & Deployment
            </li>
          </ul>
        </div>

        <div className="bg-white/30 backdrop-blur-2xl p-6 rounded-2xl shadow-xl border border-white/30 hover:shadow-2xl transition hover:scale-103 duration-400">
          <h2 className="text-xl font-semibold mb-5 text-blue-800 flex items-center gap-2">
            <FaClock className="text-blue-600 text-xl" />
            Course Info
          </h2>

          <div className="space-y-3 text-blue-900/80">
            <p>
              <span className="font-semibold text-blue-800">Title:</span>{' '}
              {course.title}
            </p>
            <p>
              <span className="font-semibold text-blue-800">Instructor:</span>{' '}
              {course.instructor}
            </p>
            <p>
              <span className="font-semibold text-blue-800">Rating:</span>{' '}
              {course.rating}
            </p>
            <p>
              <span className="font-semibold text-blue-800">Price:</span>{' '}
              {course.price}
            </p>
            <p>
              <span className="font-semibold text-blue-800">Duration:</span>{' '}
              {course.duration || 'Self-paced learning'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
