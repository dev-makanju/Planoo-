import React from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import TaskCard from '../dashboard/cards/TaskCard'
import Box from '@mui/material/Box';
import './Dash.css';
import BalanceCard from './cards/BalanceCard';

const Dashboard = () => {
  return (
   <DashboardLayout>
      <div className='dash-main'>
        <div className='dash-main_widget'>
            <Box   
              display="flex"
              flexDirection='column'
              gap='.8rem'
            >
              <TaskCard title='Today focus' ongoing='2.8' total='6h'/>
              <TaskCard title='Completed Task' ongoing='3' total='6'/>
            </Box>
            <div>
              <BalanceCard/>
            </div>
        </div>
      </div>
   </DashboardLayout>
  )
}

export default Dashboard
