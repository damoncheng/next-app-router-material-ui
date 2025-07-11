'use client';
import React from 'react';
import dynamic from 'next/dynamic'

const DashboardComponents = dynamic(
  () => import('@/components/DashBoard'),
  { ssr: false }
)

const Dashboard = () => {

  return (
    <DashboardComponents />
  );
};

export default Dashboard;