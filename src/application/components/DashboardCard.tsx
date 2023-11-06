import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface DashboardCard {
    title : string;
    count : number;
    icon : React.ReactNode;
  }

const DashboardCard: React.FC<DashboardCard> = ({title, count, icon}) => {

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="h3" color="text.secondary" component="div">
            {count}
          </Typography>
        </CardContent>
      </Box>
         {icon}
    </Card>
  );
}

export default DashboardCard