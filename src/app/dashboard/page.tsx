'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Button } from '@mui/material';
import { getCurrentUser, isAuthenticated, logout } from '@/libs/storage';
import { LoginResponseUser } from '@/types/auth';

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<null | LoginResponseUser>(null);

  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
    if (!isAuthenticated()) {
      router.replace('/login');
    }
  }, [router]);

  if(user == null) return;

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        欢迎回来, {user.username}
      </Typography>
      <Typography variant="body1" paragraph>
        您已成功登录系统
      </Typography>
      <Button 
        variant="contained" 
        color="secondary"
        onClick={() => {
          logout();
          router.push('/login');
        }}
      >
        退出登录
      </Button>
    </Container>
  );
};

export default Dashboard;