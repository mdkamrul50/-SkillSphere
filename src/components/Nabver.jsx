import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.jpg';
import { Button } from '@heroui/react';
import Link from 'next/link';

const Nabver = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-gray-100 container mx-auto py-1 flex justify-between pr-3 items-center shadow-b-sm">
        <Image src={Logo} height={120} width={220} alt='logo'/>

        <ul className="flex items-center gap-4 font-semibold text-gray-700">
          <Link href={'/'}>
            <li>Home</li>
          </Link>
          <Link href={'/course'}>
            {' '}
            <li>Courses</li>
          </Link>
          <Link href={'/profile'}>
            <li>My Profile</li>
          </Link>
        </ul>
        <div className="flex gap-1">
          <Button className="">Login</Button>
          <Button variant="outline" className="">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nabver;
