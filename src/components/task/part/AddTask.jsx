import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TaskTemplateCard from './TaskTemplateCard';
import "react-datepicker/dist/react-datepicker.css";
import './AddTask.css'
import './TaskModal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'auto',
  width: '85%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  maxHeight: '550px',
  p: 2,
};

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='modal'>
              <div className='modal-container'>
                  <div className='modal-header-container'>
                      <span>T</span> <h1>End to End Test</h1>
                  </div>
                  <hr/>
                  <div className='custom-tag'>
                      <h1>Key deliverables</h1>
                      <ul>
                        <li>Enginerring report</li>
                        <li>Proposal</li>
                        <li>Design Drawing</li>
                      </ul>

                      <div className='custom-tag'>
                        <h1>Requirements</h1>
                        <ol>
                          <li>Need to complete Enginerring report</li>
                          <li>Need to complete Proposal report</li>
                          <li>Need to complete Design Drawing</li>
                        </ol>
                      </div>
                  </div>
              </div>
              <div className='modal-container dragable'>
                  <div className='modal-header-container'>
                     <p className='link-rel'>copy link</p>
                     <p className='link-rel'>delete</p>
                     <button className='modal-use-button'>USE TEMPLATE</button>
                  </div>
                  <hr/>
                  <div className='custom-tag main'>
                    <h1>Project overview</h1>
                  </div>
                  <img className='custom-card-img' src={process.env.PUBLIC_URL + '/assets/test-avater.jpeg'} alt=""/>                                       
              </div>
            </div>
          </Box>
        </Modal>
      </div>    
      <div className='task-board'>
        <div className='board'>
            <div className='board__wrapper'>
                <div className='template__wrapper_AI'>
                  <h2>What task do you want to create?</h2>
                  <div>   
                    <div className='form-control-banner'>
                      <label htmlFor="text-search"></label>
                      <input 
                          type="text" 
                          id="text-search" 
                          placeholder="Hi there, how can i help you?"
                      />
                      <button>Ask</button>
                    </div>
                  </div>
                </div>
                <div className='template__wrapper'>
                  <div className='wrapper_item'>
                    <TaskTemplateCard 
                      templateName='Pinterest pin description'
                      templateDesc='Template inspired by the living legend in Nigeria'
                      templateUsers='1000'
                      handlePreview={handleOpen}
                    />
                    <TaskTemplateCard 
                      templateName='Pinterest pin description'
                      templateDesc='Template inspired by the living legend in Nigeria'
                      templateUsers='1340'
                      handlePreview={handleOpen}
                    />
                  </div>
                  <div className='wrapper_item'>
                    <TaskTemplateCard 
                      templateName='Pinterest pin description'
                      templateDesc='Template inspired by the living legend in Nigeria'
                      templateUsers='1700'
                      handlePreview={handleOpen}
                    />
                    <TaskTemplateCard 
                      templateName='Pinterest pin description'
                      templateDesc='Template inspired by the living legend in Nigeria'
                      templateUsers='100'
                      handlePreview={handleOpen}
                    />
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
