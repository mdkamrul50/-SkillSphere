import Banner from '@/components/Banner';
import LearningTips from '@/components/LearningTips';
import TrendingCourses from '@/components/TeandingCourses';
import TopCourse from '@/components/TopCourse';
import TopInstructors from '@/components/TopInstructors';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <div>
      <ToastContainer />
      <Banner></Banner>
      <TopCourse></TopCourse>
      <LearningTips></LearningTips>
      <TrendingCourses></TrendingCourses>
      <TopInstructors></TopInstructors>
    </div>
  );
}
