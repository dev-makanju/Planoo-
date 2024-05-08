import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BalanceCard(props) {
  return (
    <Card variant="outlined" sx={{ height: 265, width: '100%', boxShadow:'0px'}}>
      <CardContent sx={{ display:'flex', height:'100%', justifyContent:'space-between', flexDirection: 'column'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          TOTAL BALANCE (BTC)
        </Typography>
        <Box 
            display="flex"
            justifyContent='space-between'
            alignItems="center"
        >
          <Typography sx={{ fontSize: 40 }}>
            1.098
            <br/>
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            chart
            <br/>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}