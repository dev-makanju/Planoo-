import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../Dash.css'


export default function BalanceCard(props) {
  return (
    <Card variant="outlined" sx={{ height: 265, width: '100%', boxShadow:'0px'}}>
      <CardContent sx={{ display:'flex', height:'100%', justifyContent:'space-between', flexDirection: 'column'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.cardType}
        </Typography>
        <Box 
            display="flex"
            justifyContent='space-between'
            alignItems="center"
        >
          <Typography sx={{ fontSize: 40 }}>
            {props.amount}
            <br/>
          </Typography>
          {  props.isVisible && (   
          <div className='bar-chart'>
            <div className='bar-1 bar'></div>
            <div className='bar-2 bar'></div>
            <div className='bar-3 bar'></div>
            <div className='bar-4 bar'></div>
            <div className='bar-5 bar'></div>  
          </div>
          )}
        </Box>
        { props.showTotal && (   
        <>
          <hr/>
          <Box 
            display="flex"
            justifyContent='space-between'
          >
            <Typography sx={{ fontSize: 10 }}>
              TOTAL
            </Typography>
            <Typography sx={{ fontSize: 10 }}>
              {props.total}
            </Typography>
          </Box>
        </>
         )}
      </CardContent>
    </Card>
  );
}