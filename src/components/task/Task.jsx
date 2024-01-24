import React, {useState} from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import Button from '@mui/material/Button';
import AddTask from '../task/part/AddTask';

const Task = () => {
  const [ open , setOpen] = useState(false);
  const handleClickClose = (val) => {
    setOpen(val);
  };
  const handleClickOpen = () => {
    setOpen(true);
  }

  return (
    <DashboardLayout>
      <Button variant="outlined" onClick={handleClickOpen}>
        Set New Task
      </Button>
      <AddTask onOpenDialog={open} onCloseDialog={handleClickClose}/>
    </DashboardLayout>
  )
}

export default Task

