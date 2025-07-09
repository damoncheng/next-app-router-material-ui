import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import {GetRole} from '@/types/user';

export default function UserCard({username, role}:{username: string, role: number}) {

    const card = (
          <CardContent>
            <Typography variant="h5" component="div">
               {username}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
               {GetRole(role)}
            </Typography>
          </CardContent>
      );

    return (
        <Box>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}