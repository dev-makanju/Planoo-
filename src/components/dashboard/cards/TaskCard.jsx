import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TaskCard(props) {
  return (
    <Card variant="outlined" sx={{ minWidth: 275, boxShadow:'0px'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Box 
            display="flex"
            justifyContent='space-between'
            alignItems="center"
        >
          <Typography sx={{ fontSize: 40 }}>
            {props.ongoing}
            <br />
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            /{props.total}
            <br />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}