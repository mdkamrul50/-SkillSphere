'use client';

import { UpdateProfile } from '@/components/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { BiEdit, BiError } from 'react-icons/bi';

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading...
      </div>
    );
  }

  // if (!user) {
  //   return (
  //     <div className="flex justify-center items-center h-screen text-red-500">
  //       You are not logged in <BiError />
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-blue-300 to-blue-50 flex justify-center items-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl px-6 py-10">
  
        <div className="flex flex-col items-center">
          <img
            src={user.image || 'https://i.ibb.co/2kR7JzG/user.png'}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-md"
          />
          <h2 className="mt-4 text-xl font-bold text-gray-800">
            {user.name || 'No Name'}
          </h2>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>


        <div className="my-6 border-t"></div>

      
        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">User ID</span>
            <span className="font-medium text-gray-800 truncate max-w-45">
              {user.id}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Email Verified</span>
            <span className="font-medium text-green-600">
              {user.emailVerified ? 'Yes ' : 'No ❌'}
            </span>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
      
          <UpdateProfile />

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
