import React, { useState } from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import './style/styles.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import  Drawer  from './part/Drawer';

const PlannoAI = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const initialData = {
    'To do': [
      { id: 'card-1', 
        content: 'Drag ID card 1',
        desc: 'This a description tag for whi ish hbgejnmsdnekjhrbmsv shdjne',
        tasks: [
          { id: 'task-1', content: 'Task item 1', completed: false },
          { id: 'task-2', content: 'Task item 2', completed: true },
          { id: 'task-3', content: 'Task item 3', completed: false },
          { id: 'task-4', content: 'Task item 4', completed: true },
          { id: 'task-5', content: 'Task item 5', completed: false },
        ],
        expanded: false
      },
      { id: 'card-2', 
        content: 'Drag ID card 2',
        desc: 'This a description tag for whi ish hbgejnmsdnekjhrbmsv shdjne',
        tasks: [
          { id: 'task-1', content: 'Task item 1', completed: false },
          { id: 'task-2', content: 'Task item 2', completed: true },
          { id: 'task-3', content: 'Task item 3', completed: false },
          { id: 'task-4', content: 'Task item 4', completed: true },
          { id: 'task-5', content: 'Task item 5', completed: false },
        ],
        expanded: false
      },
    ],
    'Request Backlog': [],
    'In Progress': [],
    'Approved': [],
  };
  
  const [taskStatuses, setTaskStatuses] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceStatus = source.droppableId;
    const destinationStatus = destination.droppableId;
    const updatedStatuses = { ...taskStatuses };
    const [draggedItem] = updatedStatuses[sourceStatus].splice(source.index, 1);
    updatedStatuses[destinationStatus].splice(destination.index, 0, draggedItem);
    setTaskStatuses(updatedStatuses);
  };

  const toggleExpand = (status, taskId) => {
    const updatedStatuses = { ...taskStatuses };
    const taskIndex = updatedStatuses[status].findIndex(task => task.id === taskId);
    updatedStatuses[status][taskIndex].expanded = !updatedStatuses[status][taskIndex].expanded;
    setTaskStatuses(updatedStatuses);
  };

  const handleCheckboxChange = (status, taskId, itemId) => {
    const updatedStatuses = { ...taskStatuses };
    const taskIndex = updatedStatuses[status].findIndex(task => task.id === taskId);
    const itemIndex = updatedStatuses[status][taskIndex].tasks.findIndex(item => item.id === itemId);
    updatedStatuses[status][taskIndex].tasks[itemIndex].completed = !updatedStatuses[status][taskIndex].tasks[itemIndex].completed;
    setTaskStatuses(updatedStatuses);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  }

  const toggleDrawer = () => {
    setOpenDrawer(true);
  }

  return (
    <DashboardLayout>
      <div className="Planno_main">
        <Drawer openDrawer={openDrawer} closeDrawer={handleCloseDrawer}/>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className='status_wrapper'>
            {Object.keys(taskStatuses).map((status, index) => (
              <Droppable key={status} droppableId={status}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="droppable-container"
                  >
                    <div className={`task_header_wrapper ${status}`}>
                      {/* Add task */}
                      <div  className={`task_header`}>
                        {status === 'Approved' && (<CheckCircleIcon className='approved logo icon'/>)}
                        {status === 'In Progress' && (<PendingIcon className='pending logo icon'/>)}
                        {status === 'Request Backlog' && (<AddToQueueIcon className='backlog logo icon'/>)}
                        <h3>{status}</h3>
                        <p className='status_length'>{taskStatuses[status].length}</p>
                      </div>
                      <div>
                        {status === 'To do' && (<button className='custom__add' onClick={() => toggleDrawer()}>+ Add Task</button>)}
                      </div>
                    </div>
                    {taskStatuses[status].map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="draggable-item"
                          >
                            <div className="task-header">
                              <h1>{task.content}</h1>
                              <p>{task.desc}</p>
                              <div className='task-completed-wrapper'>
                                <p>2/5 tasks completed</p>
                                <button className='toggle-button' onClick={() => toggleExpand(status, task.id)}>
                                  {task.expanded ? 'show less' : 'show more'}
                                </button>
                              </div>
                            </div>
                            {task.expanded && (
                              <div className="task-details">
                                <ul>
                                  {task.tasks.map((item) => (
                                    <li key={item.id}>
                                      <input
                                        type="checkbox"
                                        checked={item.completed}
                                        onChange={() => handleCheckboxChange(status, task.id, item.id)}
                                      />
                                      {item.content}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </DashboardLayout>
  );
};

export default PlannoAI;
