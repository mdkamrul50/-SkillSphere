'use client';

import React from 'react';

import { Check } from '@gravity-ui/icons';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const loginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,

      password,
      callbackURL:'/'
    });
    console.log(data, error);
  };
  return (
    <div className="flex justify-center py-40 bg-blue-200">
      <Form
        onSubmit={onSubmit}
        className="flex w-96 flex-col gap-4 shadow-xl rounded-2xl px-8 py-20 bg-linear-to-br from-blue-100 via-blue-300 to-blue-50"
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return 'Please enter a valid email address';
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input className={'bg-blue-100'} placeholder="Enter your email" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return 'Password must be at least 8 characters';
            }
            if (!/[A-Z]/.test(value)) {
              return 'Password must contain at least one uppercase letter';
            }
            if (!/[0-9]/.test(value)) {
              return 'Password must contain at least one number';
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input className={'bg-blue-100'} placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="">
          <Button className={'w-full'} type="submit">
            <Check />
            Login
          </Button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          Don’t have an account?{' '}
          <Link
            href={'/register'}
            className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition"
          >
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default loginPage;
