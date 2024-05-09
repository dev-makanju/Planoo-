import React from 'react'
import Header from '../Nav/Header/Header'
import Footer from '../Nav/Footer/Footer'

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