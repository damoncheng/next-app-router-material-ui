'use client';
import React from 'react';
import dynamic from 'next/dynamic'

const FlowComponents = dynamic(
  () => import('@/components/Flow'),
  { ssr: false }
)

export default function FlowBody() {  

    return (
      <FlowComponents />
    );
}