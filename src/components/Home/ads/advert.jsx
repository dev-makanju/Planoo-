import React from 'react'
import './advert.css';

const advert = () => {
   return (
      <div className='ads-wrapper'>
         <div className='ads top-banner'>
            <div>
              <h2>Easily tracing your task, every day, every week with ease</h2>
              <p>Easily handle your daily tasks with the 'Tap and Create Task' including a progress preview. So simple!</p>
            </div>
            <div>
               image
            </div>
         </div>
         <div className='ads progress-banner'>
           <div className="orang text-main">
              <h2>Progress preview in fun way, yes, it's fun</h2>
              <p>A task progress preview that is so enjoyable and attractive that you actually</p>
           </div>
           <div className="light-blu text-main">
              <h2>Effortlessly manage your task with the help by AI</h2>
              <p>spend less time on manual tasks and more time on important task, automate all the test with AI</p>
              <div className='btn-banner-wrapper'>
                 <div className='btn-banner'>Change reading time</div>
                 <div className='btn-banner'>Add music plan today</div>
                 <div className='btn-banner'>Move reading time next week</div>
              </div>
           </div>
         </div>
      </div>
   )
}

export default advert