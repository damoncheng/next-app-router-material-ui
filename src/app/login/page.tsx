'use client';
import React from 'react';
import dynamic from 'next/dynamic'

const LoginComponents = dynamic(
  () => import('@/components/Login'),
  { ssr: false }
)

const LoginPage = () => {

  return (
    <LoginComponents />
  );
 
};

export default LoginPage;