import {useState} from 'react'
import { useAuth } from '../../hooks/AuthProvider';
import { useNavigate } from 'react-router-dom';
import SocialAuth from './socials/SocialAuth';
import './style.css';

const Login = () => {
   const navigate  = useNavigate();
   const [input, setInput] = useState({
      username: '',
      password: '',
   })
   const auth = useAuth();
   const handleSubmitEvent = (e) => {
      e.preventDefault();
      if(input.username !== '' && input.password !== ''){
         auth.loginAction(input);
         return;
      }
      alert('pleae provide a valid input');
   }
   const handleInput = (e) => {
      const { name , value } = e.target;
      setInput((prev) => ({
         ...prev,
         [name]: value  
      }))
   }
   
   return (
      <>
         <form onSubmit={handleSubmitEvent}>
            <h1>Login</h1>
            <div className='form_control'>
               <label htmlFor="username">Email:</label>
               <input 
                  type="text"
                  id="username"
                  name="username"
                  placeholder='example@yahoo.com'
                  aria-describedby="user-email"
                  aria-invalid="false"
                  onChange={handleInput}
               />
               <div id="user-email" className="sr-only">
                  Please enter a valid username. It must contain at least 6 characters.  
               </div>
            </div>
            <div className='form_control'>
               <label htmlFor="password">Password:</label>
               <input 
                  type="password"
                  id="password"
                  name="password"
                  placeholder='password'
                  aria-describedby="user-password"
                  aria-invalid="false"
                  onChange={handleInput}
               />
               <div id="user-password" className="sr-only">
                  your password should be more than 6 character  
               </div>
            </div> 
            <button className='btn-submit'>Submit</button>  
            <p>Need an account? <span className='register-link' onClick={() => navigate('/register')}>register here</span></p>
         </form>
         <div className='social-signing'>
            <SocialAuth/>
         </div>
      </>
   )
}

export default Login