'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Button } from '@mui/material';
import { getCurrentUser, isAuthenticated, logout } from '@/libs/storage';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function Home() {
    const router = useRouter();
    const user = getCurrentUser();
  
    useEffect(() => {
        if (!isAuthenticated()) {
            router.replace('/login');
        }else{
            router.replace('/dashboard');
        }
    }, [router]);
    return (
        <Box sx={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // 使其垂直居中
         }}>
            <CircularProgress />
        </Box>
    );
  }