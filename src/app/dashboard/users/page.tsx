'use client';
import dynamic from 'next/dynamic';

const UserGridComponents = dynamic(
  () => import('@/components/UserGrid'),
  { ssr: false }
)

export default function HomeBody() {

  return (
     <UserGridComponents />
  );

}