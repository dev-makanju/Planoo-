import React from 'react'
import Login from '../components/Auth/Login';
import PageTitle from '../components/Nav/Meta/PageTitle';

const LoginPage = () => {
  return (
    <>
      <PageTitle title='Login'/>
      <Login/> 
    </>
  )
}

export default LoginPage