import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        January 3rd, 2024
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        This is the recent post title, please confirm receipt
      </Typography>
      <Typography variant="body2">
        well meaning and kindly. hello my this is testing phase to make sure this release is perfect
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function RecentCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
