import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import '../style/styles.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

export default function AnchorTemporaryDrawer(props) {
  const [stateData, setStateData] = useState({
    right: false,
  });

  const [tasks, setTasks] = useState(['']);

  useEffect(() => {
    setStateData({ ...stateData, right: props.openDrawer });
  }, [props.openDrawer]);

  const handleAddTask = () => {
    setTasks([...tasks, '']);
  };

  const handleTaskChange = (index, event) => {
    const newTasks = [...tasks];
    newTasks[index] = event.target.value;
    setTasks(newTasks);
  };

  const removeAddTask = (val) => {
    const updatedTask = tasks.filter((_,i) => i !== val)
    setTasks(updatedTask)
  }

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor="right"
          open={stateData.right}
          onClose={props.closeDrawer}
          PaperProps={{
            sx: {
              width: '400px',
              padding: '1rem',
            },
          }}
        >
          <div className="modal-header-container create-task-header">
            <span>T</span> <h1>End to End Test</h1>
          </div>
          <hr />
          <div className="custom-tag create-task">
            <h1>Key deliverables</h1>
            <ul>
              <li>Engineering report</li>
              <li>Proposal</li>
              <li>Design Drawing</li>
            </ul>
          </div>
          <Stack
            direction="row"
            justifyContent="end"
            alignItems="flex-end"
            marginTop="1rem"
          >
            <Button variant="outlined">Save</Button>
          </Stack>
          <div className="add-task-section">
            {tasks.map((task, index) => (
              <div className='form_task_control'>
                <input 
                  type='text'
                  name={`Task ${index + 1}`}
                  value={task}
                  onChange={(e) => handleTaskChange(index, e)}
                />      
                <IconButton onClick={() => removeAddTask(index)} color="primary">
                  <CloseIcon/>
                </IconButton>
              </div>
            ))}  
          <IconButton onClick={handleAddTask} color="primary">
            <AddIcon />
          </IconButton>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
