'use client';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
//import Tooltip from '@mui/material/Tooltip';
//import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export default function HeadBar() {

    const pathname = usePathname();
    const pages = {
      "/": "Home",
      "/users" : "Users",
      "/flows" : "Flows"
    }
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    return (
        <AppBar  position="static" sx={{ marginTop: '20px', borderRadius: '16px' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {Object.entries(pages).map(([key, value]) => (
                  <Button
                    key={key}
                    href={key}
                    sx={{ 
                       my: 2,
                       color: (pathname == key) ?  'text.disabled' : 'white', 
                       display: 'block' 
                    }}
                  >
                    {value}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
}