'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic'

const HomeComponents = dynamic(
  () => import('@/components/Home'),
  { ssr: false }
)

export default function Home() {
  return (
    <HomeComponents />
  );
}
