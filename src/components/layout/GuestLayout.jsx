import React from 'react'
import Header from '../Nav/header/Header'
import Footer from '../Nav/Footer/Footer'
import './Dashboard.css';
const GuestLayout = (props) => {
  return (
    <>
        <Header></Header>
            <div className='body-wrapper'>
            {props.children}
            </div>
        <Footer></Footer>
    </>
  )
}

export default GuestLayout