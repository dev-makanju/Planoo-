import React from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const PlannoAI = () => {
  return (
    <DashboardLayout>
       <div className='Planno_main'>
          {/* Add a dashboard for viewing responses */}

          
          <Box sx={{ width: 500,maxWidth: '100%',}}>
            <TextField fullWidth label="Need help?" id="fullWidth" />
          </Box>
       </div>
    </DashboardLayout>
  )
}

export default PlannoAI


