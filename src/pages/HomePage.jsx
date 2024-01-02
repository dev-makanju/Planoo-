import React from 'react';
import Banner from '../components/Home/Banner';
import Header from '../components/Home/header/Header';
import Footer from '../components/Home/Footer/Footer';
import PlannoCard from '../components/Home/cards/PlannoCard';
import Accordion from '../components/Home/accordion/accordion'
import '../components/Home/accordion/accordion.css';

const HomePage = () => {
  return (
   <>
      <Header/>
      <Banner/>
      <PlannoCard/>
      <div className='accordion-wrapper'>
        <div className='accordion'>
          <Accordion/>
        </div>
        <div className='accordion'>
          <h2>Frequently Asked Questions</h2>
          <button className='btn-accordion'>Have Other Questions</button>
        </div>
      </div>
      <Footer/>
   </>
  )
}

export default HomePage;