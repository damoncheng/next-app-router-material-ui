'use client';

import UserCard from '@/components/UserCard';
import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { User, FetchUsers } from '@/types/user';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function UserGrid() {

    const [users, setUsers] = useState<User[]>([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });
  
    // Fetch users
    useEffect(() => {
      const loadUsers = async () => {
        try {
          const data = await FetchUsers();
          setUsers(data);
        } catch (error) {
          console.error('Failed to fetch users:', error);
        }
      };
      loadUsers();
    }, []);

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginTop: '20px', borderRadius: '16px' }}>
                {users.map(
                    user => (
                        <Grid key={user.username}  size={{ xs: 2, sm: 4, md: 3 }} >
                            <UserCard username={user.username} email={user.email} />
                        </Grid>
                    )
                )}
            </Grid>
         </Box>
    );   

}