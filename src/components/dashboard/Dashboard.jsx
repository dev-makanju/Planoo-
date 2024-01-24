import React from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import './Dash.css';
import Stack from '@mui/material/Stack';
import DemoPaper from '@mui/material/Paper';


const Dashboard = () => {
  return (
   <DashboardLayout>
      <div className='dash-main'>
        <div className='dash-main_widget'>
        <Stack direction="row" spacing={2}>
          <DemoPaper variant="outlined">
            default variant
            User is here
            MAkanju
          </DemoPaper>
          <DemoPaper variant="outlined">outlined variant</DemoPaper>
        </Stack>
        </div>
        <div className='dash-main_widget'>
          <div className='widget_map'>

          </div>
          <div className=''>
             
          </div>
        </div>
      </div>
   </DashboardLayout>
  )
}

export default Dashboard