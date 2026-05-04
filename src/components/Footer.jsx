'use client';

import React from 'react';
import {
  FaGraduationCap,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-20 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
   
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500 text-white p-3 rounded-2xl">
                <FaGraduationCap className="text-3xl" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">SkillForge</h2>
            </div>

            <p className="text-blue-200 text-[15px] leading-relaxed mb-6">
              Upgrade your skills. Advance your future. Learn from industry
              experts and build the career you deserve.
            </p>

            <div className="flex items-center gap-2 text-blue-300">
              <span>📍</span>
              <span className="text-sm">Bhola, Barisal, Bangladesh</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-100">
              Quick Links
            </h3>
            <ul className="space-y-3 text-blue-200">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  All Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Popular Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  For Teams
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Become an Instructor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

 
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-100">
              Company
            </h3>
            <ul className="space-y-3 text-blue-200">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-200"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-100">
              Get In Touch
            </h3>

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-blue-400 text-sm mb-1">Email</p>
                <a
                  href="mailto:hello@skillforge.com"
                  className="text-blue-200 hover:text-white transition-all duration-200"
                >
                  hello@skillforge.com
                </a>
              </div>
              <div>
                <p className="text-blue-400 text-sm mb-1">Phone</p>
                <a
                  href="tel:+8801712345678"
                  className="text-blue-200 hover:text-white transition-all duration-200"
                >
                  +880 1712-345678
                </a>
              </div>
            </div>

            <div>
              <p className="text-blue-400 text-sm mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-blue-900 hover:bg-blue-700 w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-lg" />
                </a>
                <a
                  href="#"
                  className="bg-blue-900 hover:bg-blue-700 w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a
                  href="#"
                  className="bg-blue-900 hover:bg-blue-700 w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a
                  href="#"
                  className="bg-blue-900 hover:bg-blue-700 w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
                <a
                  href="#"
                  className="bg-blue-900 hover:bg-blue-700 w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="border-t border-blue-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blue-300">
            <div>© 2026 SkillForge. All Rights Reserved.</div>

            <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center md:justify-end">
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>

            <div className="text-xs text-blue-400">
              Made with ❤️ for lifelong learners
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
