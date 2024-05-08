import React from 'react'
import Header from '../Nav/header/Header'
import Footer from '../Nav/header/Footer/Footer'

const GuestLayout = (props) => {
  return (
    <>
        <Header></Header>
            {props.children}
        <Footer></Footer>
    </>
  )
}

export default GuestLayout