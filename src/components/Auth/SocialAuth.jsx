import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../hooks/AuthProvider';

const SocialAuth = () => {
   const user = useAuth()
   return (
      <GoogleLogin 
         onSuccess={user.googleAuthResponse} 
         onError={user.googleAuthError} 
      />
   )
}

export default SocialAuth