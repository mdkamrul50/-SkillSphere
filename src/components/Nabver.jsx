'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/assets/logo.jpg';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const Nabver = () => {
  const userInfo = authClient.useSession();
  const user = userInfo.data?.user;
  const [open, setOpen] = useState(false);

  const handelSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-gray-100 container mx-auto py-2 flex justify-between pr-3 items-center shadow-b-sm">
        <Image src={Logo} height={120} width={220} alt="logo" />

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            ☰
          </button>
        </div>

        <ul className="hidden md:flex items-center gap-4 font-semibold text-gray-700">
          <Link href={'/'}>
            <li>Home</li>
          </Link>
          <Link href={'/course'}>
            <li>Courses</li>
          </Link>
          <Link href={'/profile'}>
            <li>My Profile</li>
          </Link>
        </ul>

        <div className="hidden md:block">
          {!user && (
            <div className="flex gap-1">
              <Link href={'/login'}>
                <Button>Login</Button>
              </Link>
              <Link href={'/register'}>
                <Button variant="outline">Register</Button>
              </Link>
            </div>
          )}

          {user && (
            <div className="flex gap-3">
              <Avatar>
                <Avatar.Image
                  alt="Online User"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handelSignOut} variant="danger">
                LogOut
              </Button>
            </div>
          )}
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <ul className="flex flex-col gap-3 font-semibold text-gray-700">
            <Link href={'/'} onClick={() => setOpen(false)}>
              <li>Home</li>
            </Link>
            <Link href={'/course'} onClick={() => setOpen(false)}>
              <li>Courses</li>
            </Link>
            <Link href={'/profile'} onClick={() => setOpen(false)}>
              <li>My Profile</li>
            </Link>
          </ul>

          {!user && (
            <div className="flex flex-col gap-2">
              <Link href={'/login'} onClick={() => setOpen(false)}>
                <Button className="w-full">Login</Button>
              </Link>
              <Link href={'/register'} onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </Link>
            </div>
          )}

          {user && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <Avatar.Image
                    alt="Online User"
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>NO</Avatar.Fallback>
                </Avatar>
              </div>

              <Button
                onClick={handelSignOut}
                variant="danger"
                className="w-full"
              >
                LogOut
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Nabver;
