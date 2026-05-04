'use client';
import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.jpg';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const Nabver = () => {
  const userInfo = authClient.useSession();
  const user = userInfo.data?.user;
  console.log(user);

  const handelSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="bg-gray-100">
      <div className="bg-gray-100 container mx-auto py-1 flex justify-between pr-3 items-center shadow-b-sm">
        <Image src={Logo} height={120} width={220} alt="logo" />

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
        <div>
          {!user && (
            <div className="flex gap-1">
              <Link href={'/login'}>
                <Button className="">Login</Button>
              </Link>
              <Link href={'/register'}>
                <Button variant="outline" className="">
                  Register
                </Button>
              </Link>
            </div>
          )}

          {user && (
            <div className="flex gap-3">
              <Avatar>
                <Avatar.Image alt="Online User" src={user?.image} referrerPolicy='no-referrer'/>
                <Avatar.Fallback>NO</Avatar.Fallback>
              </Avatar>

              <Button onClick={handelSignOut} variant="danger" className="">
                LogOut
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nabver;
