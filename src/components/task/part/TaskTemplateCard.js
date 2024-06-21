import React from 'react'
import './AddTask.css'

const TaskTemplateCard = (props) => {
  return (
    <div className='template-card planno-ai'>
        <h1>{props.templateName}</h1>
        <p>{props.templateDesc}</p>
        <div className='icons'>
           <div>
               <span>{props.templateUsers} users</span>
           </div> 
           <div className='preview'>
               <span onClick={props.handlePreview}>preview</span>
           </div>
        </div>
    </div>
  )
}

export default TaskTemplateCard