import React from 'react';

import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Signup />
      <Link href="/Login">Go to Login</Link>
    </>
  );
};

export default Page;
