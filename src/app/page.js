'use client'

import React from 'react';

import Link from 'next/link';
import { Button } from '@heroui/react';

const Page = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between m-5 p-6 bg-gray-400 bg-opacity-50 backdrop-blur-lg rounded-lg border border-white border-opacity-20'>
        <div className='mb-4 md:mb-0'>
          <h1>LOGO</h1>
        </div>
        <div>
          <ul className='flex flex-col md:flex-row gap-4 items-center'>
            <li className='hover:underline'>
              <Link href='/'>Home</Link>
            </li>
            <li className='hover:underline'>
              <Link href='/blood-donor'>Blood Donor</Link>
            </li>
            <li className='hover:underline'>
              <Link href='/about'>About Us</Link>
            </li>
            <li className='hover:underline'>
              <Link href='/chat'>Chat</Link>
            </li>
            <li>
              <Link href='/signup'>
                <Button className='bg-red-800 text-white font-bold rounded-xl px-4 py-2 hover:bg-red-700 transition duration-300 ease-in-out' variant='shadow'>
                  Sign Up
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
