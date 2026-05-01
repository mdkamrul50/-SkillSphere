'use client';

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { LuRedoDot } from 'react-icons/lu';

const instructors = [
  {
    id: 1,
    name: 'James Wick',
    role: 'Senior Full Stack Developer',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'UI/UX Design Lead',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'David Wilson',
    role: 'AI & Python Expert',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Emma Thompson',
    role: 'Data Scientist & ML Engineer',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
];

export default function TopInstructors() {
  return (
    <section className="py-20 bg-linear-to-b from-blue-200 via-white to-blue-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3 flex items-center gap-3 justify-center md:justify-start">
            Meet Our Instructors
            <LuRedoDot className="text-blue-500 text-4xl" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 text-lg">
            Learn from passionate industry experts with years of real-world
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3
                ${index % 2 === 0 ? 'lg:-translate-y-5' : 'lg:translate-y-5'}`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={instructor.img}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              <div className="p-7 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">
                  {instructor.name}
                </h3>
                <p className="text-blue-600 font-medium text-[15px] mb-8">
                  {instructor.role}
                </p>

                <div className="flex justify-center gap-5">
                  <a
                    href="#"
                    className="w-11 h-11 flex items-center justify-center bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white rounded-2xl transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="w-11 h-11 flex items-center justify-center bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white rounded-2xl transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="w-11 h-11 flex items-center justify-center bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white rounded-2xl transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-2xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
            See All Instructors
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
