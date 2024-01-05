import React from 'react'
//import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../hooks/AuthProvider';

const SocialAuth = () => {
   const user = useAuth()
   return (
      <div>
         <button onClick={user.googleAuthResponse}>Continue with google</button>
         <button onClick={user.googleAuthLogout}>log out google</button>
      </div>
   )
}

export default SocialAuth