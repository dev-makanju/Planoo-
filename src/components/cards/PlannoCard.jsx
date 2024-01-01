import React from 'react';
import './PlanoCard.css';

const PlannoCard = () => {
   return (
      <div className='planno_main'>
         <div>
            <h1>How Planoo change lives</h1>
         </div>
         <div className='planno_wrapper'>
            <div className='pla_container'>
               <p>This app is a game changer for my daily task management, I appreciate it's efficency. Now, my hikes are even more enjoyable!</p>
               <div>
                  <div className='pla_image_wrapper'>
                     <img src={process.env.PUBLIC_URL + '/assets/profile.png'} alt="firstImage"/>
                     <div className="social_img_logo">
                        <p>X</p>
                     </div>
                  </div>
                  <h1>John Doe</h1>
                  <p>Photography, New York, Stanford University</p>
               </div>
            </div>
            <div className='pla_container'>
               <p>This app is a game changer for my daily task management, I appreciate it's efficency. Now, my hikes are even more enjoyable!</p>
               <div>
                  <div className='pla_image_wrapper'>
                     <img src={process.env.PUBLIC_URL + '/assets/profile.png'} alt="firstImage"/>
                     <div className="social_img_logo">
                        <p>X</p>
                     </div>
                  </div>
                  <h1>John Doe</h1>
                  <p>Photography, New York, Stanford University</p>
               </div>
            </div>
            <div className='pla_container'>
               <p>This app is a game changer for my daily task management, I appreciate it's efficency. Now, my hikes are even more enjoyable!</p>
               <div>
                  <div className='pla_image_wrapper'>
                     <img src={process.env.PUBLIC_URL + '/assets/profile.png'} alt="firstImage"/>
                     <div className="social_img_logo">
                        <p>X</p>
                     </div>
                  </div>
                  <h1>John Doe</h1>
                  <p>Photography, New York, Stanford University</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PlannoCard