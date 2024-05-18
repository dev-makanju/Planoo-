import React from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import TaskCard from '../dashboard/cards/TaskCard'
import Box from '@mui/material/Box';
import './Dash.css';
import BalanceCard from './cards/BalanceCard';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
  return (
   <DashboardLayout>
      <div className='dash-main'>
        <div className='dash-main_widget'>
            <div className='widget-item mini-widget'>
              <Box   
                display="flex"
                flexDirection='column'
                gap='.8rem'
              >
                <TaskCard title='Today focus' ongoing='2.8' total='6h'/>
                <TaskCard title='Completed Task' ongoing='3' total='6'/>
              </Box>
              <BalanceCard showTotal={true} total='$6.000 / 12.000' cardType='PAID INVOICES' amount='24' isVisible={false}/>
            </div>
            <div className='widget-item'>
              <BalanceCard showTotal={false} cardType='TOTAL BALANCE (BTC)' amount='1.095' isVisible={true}/>
            </div>
        </div>
      </div>
      <div className='dash-main'>
        <div className='dash-main_widget'>
            <div className='widget-item mini-widget'>
              <Box   
                display="flex"
                flexDirection='column'
                gap='.8rem'
              >
                <div className='custom-card'>
                  <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Typography sx={{ fontSize: 10 }}>
                      MJ FASR HOUR
                    </Typography>
                    <div className='custom-button'></div>
                  </Box>
                  <div>
                    <Box 
                        display="flex"
                        justifyContent='space-between'
                        alignItems="center"
                    >
                      <Typography sx={{ fontSize: 40 }}>
                          6.9
                        <br />
                      </Typography>
                      <Typography sx={{ fontSize: 14 }}>
                        /15H
                        <br />
                      </Typography>
                    </Box>
                    <hr/>
                    <Box>
                      <Typography sx={{ fontSize: 10, marginBottom: 2, marginTop: 2, }}>
                        LATEST ARTICLES
                      </Typography>
                      <div className='img-card-wrapper'>
                          <img className='custom-card-img' src={process.env.PUBLIC_URL + '/assets/test-avater.jpeg'} alt=""/>                      
                          <img className='custom-card-img' src={process.env.PUBLIC_URL + '/assets/test-avater.jpeg'} alt=""/>                      
                          <img className='custom-card-img' src={process.env.PUBLIC_URL + '/assets/test-avater.jpeg'} alt=""/>                      
                          <img className='custom-card-img' src={process.env.PUBLIC_URL + '/assets/test-avater.jpeg'} alt=""/>                                       
                      </div>
                    </Box>
                  </div>
                </div>
              </Box>
              <BalanceCard showTotal={true} total='6 Out of 12' cardType='DRAFT PUBLISHED' amount='6' isVisible={false}/>
            </div>
            <div className='widget-item'>
              <Box 
                display="flex"
                gap='.8rem'
              >
                <div className='widget-item box card-GPT'>
                  <img src={process.env.PUBLIC_URL + '/assets/ai-generated.jpg'} alt="ai-generated" />
                </div>
                <div className='widget-item box card-BAL'>
                  <img src={process.env.PUBLIC_URL + '/assets/fantasy.jpg'} alt="ai-generated" />
                </div>
              </Box>
              <div className='custom-dash-title'>
                <h1>CUSTOM DASHBOARD</h1>
                <Typography sx={{ fontSize: 14 }}>
                  10 / 20 TEMPLATE
                  <br />
                </Typography>
              </div>
            </div>
        </div>
      </div>
   </DashboardLayout>
  )
}

export default Dashboard
