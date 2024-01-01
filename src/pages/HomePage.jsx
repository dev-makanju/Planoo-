import React from 'react';
import Banner from '../components/Home/Banner';
import Header from '../components/Home/header/Header';
import Footer from '../components/Home/Footer/Footer';
import PlannoCard from '../components/cards/PlannoCard';

const HomePage = () => {
  return (
   <>
      <Header/>
      <Banner/>
      <PlannoCard/>
      <Footer/>
   </>
  )
}

export default HomePage;