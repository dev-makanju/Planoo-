import React from 'react'
import './header/Header.css';

const Banner = () => {
   return (
     <section id="banner" className="banner-main">
        <div className='banner-text main-text'>
            <div className='text-container'>
               <div>   
                  <h1>Get ready to <span class="black">supercharge</span> your goal-setting and planning with AI Planner</h1>
                  <div className='form-control-banner'>
                     <label htmlFor="text-search"></label>
                     <input 
                        type="text" 
                        id="text-search" 
                        placeholder="Enter your email"
                     />
                     <button>Register</button>
                  </div>
               </div>
               <small>Boost your efficiency with our Productivity app! Get more done, effortlessly</small>
            </div>  
        </div>
        <div className='banner-text banner-image'>
           <img src={process.env.PUBLIC_URL + '/assets/tasker.jpg'} alt="banner"/>
           <div className='overlay-banner'>
              <div className='banner-ball-bold'></div>
              <div className='banner-ball-light'></div>
              <div className='banner-ball-fade'></div>
           </div>
        </div>
     </section>
   )
}

export default Banner