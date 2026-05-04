import React from 'react';
import BannerImage from '@/assets/banner-image.png';
import Image from 'next/image';
import { SlGraduation } from 'react-icons/sl';
import { Button } from '@heroui/react';
import {
  FaGraduationCap,
  FaPlay,
  FaUsers,
  FaBookOpen,
  FaAward,
  FaSmile,
  FaChartBar,
  FaFileAlt,
  
  FaRocket,
  
} from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import AnimatedCard from './AnimatedCard';

const Banner = () => {
  return (
    <AnimatedCard>
      <div className="bg-blue-100">
        <div className="container mx-auto pl-6  flex  lg:flex-row md:flex-col-reverse flex-col-reverse ">
          <div className="pt-10 text-center md:text-left ">
            <span className=" font-semibold text-blue-500 flex items-center gap-3 bg-blue-200 px-3 py-1 rounded-full max-w-60 mb-8 ">
              <FaGraduationCap /> Online Learning Platform
            </span>
            <h2 className="md:text-6xl text-5xl font-bold pb-3">
              Upgrade Your Skills.{' '}
            </h2>
            <h2 className="md:text-6xl text-5xl font-bold ">
              Advance Your <span className="text-blue-500">Future.</span>{' '}
            </h2>
            <p className=" font-semibold text-gray-500 mt-5">
              Explore expert-led courses ni tech Web Development, Web Design,
              Marketing , <br /> Business and more. Learn at your pace build
              your future you deserve.
            </p>

            <Button className={'rounded-xl px-8 py-6 mr-3  text-xl mt-8'}>
              Explore Courses <FaArrowRightLong className="mt-1 text-2xl" />
            </Button>
            <Button
              variant="secondary"
              className={'rounded-xl px-8 py-6 mt-10  text-black'}
            >
              <FaPlay /> How It Works
            </Button>
            <section className=" py-15">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-blue-100">
                      <FaUsers className="text-blue-500 text-lg" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">1000+</h2>
                      <p className="text-sm text-gray-500">Happy Students</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-green-100">
                      <FaBookOpen className="text-green-500 text-lg" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">7+</h2>
                      <p className="text-sm text-gray-500">Expert Courses</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-yellow-100">
                      <FaAward className="text-yellow-500 text-lg" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">30+</h2>
                      <p className="text-sm text-gray-500">
                        Skilled Instructors
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-purple-100">
                      <FaSmile className="text-purple-500 text-lg" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">4.8/5</h2>
                      <p className="text-sm text-gray-500">Average Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="">
            <section className="relative  py-10 overflow-hidden ml-10">
              <div className="max-w-6xl mx-auto px-4 flex justify-center items-center relative">
                <div className="absolute w-64 md:flex hidden h-64 md:w-80 md:h-80 lg:w-102.5 lg:h-112.5 bg-blue-500 rounded-full opacity-70 blur-2xl"></div>

                <div className="relative z-10 md:flex hidden justify-center">
                  <Image
                    src={BannerImage}
                    alt="student"
                    width={550}
                    height={550}
                    className="object-contain "
                  />
                </div>

                <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-xl p-4 items-center gap-3 z-20">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaChartBar className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Track Your
                    </p>
                    <p className="text-sm text-gray-600">Progress</p>
                  </div>
                </div>

                <div className="hidden md:flex absolute right-0 top-10 bg-white shadow-md rounded-xl p-4 items-center gap-3 z-20">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaPlay className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Learn Anytime
                    </p>
                    <p className="text-sm text-gray-600">Anywhere</p>
                  </div>
                </div>

                <div className="hidden md:flex absolute right-0 bottom-10 bg-white shadow-md rounded-xl p-4 items-center gap-3 z-20">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <FaFileAlt className="text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Get Certified &
                    </p>
                    <p className="text-sm text-gray-600">Boost Your Career</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="relative lg:absolute lg:bottom-45 lg:left-45 container mx-auto z-20 mt-10 lg:mt-0">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-start gap-4 ">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaUsers className="text-blue-500 text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Learn from Experts
                  </h3>
                  <p className="text-sm text-gray-500">
                    Courses by industry professionals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:border-l md:pl-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaRocket className="text-green-500 text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Flexible Learning
                  </h3>
                  <p className="text-sm text-gray-500">
                    Study at your own pace anytime, anywhere
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:border-l md:pl-6">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <FaAward className="text-yellow-500 text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Practical Knowledge
                  </h3>
                  <p className="text-sm text-gray-500">
                    Real-world projects and hands-on learning
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:border-l md:pl-6">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaSmile className="text-purple-500 text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Career Growth</h3>
                  <p className="text-sm text-gray-500">
                    Build skills that help you grow your career
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimatedCard>
  );
};

export default Banner;
