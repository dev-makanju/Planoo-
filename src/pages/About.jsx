import React from 'react'
import PageTitle from '../components/Nav/Meta/PageTitle'

const About = () => {
  return (
    <>
      <PageTitle title='About'/>
      <div className='about-wrapper'>
         <div className='about-container'>
            <h1>Our Story</h1>
            <img className='about-banner' src={process.env.PUBLIC_URL + '/assets/about.png'} alt="profileImage"/>
         </div>
         <p className='about-content'>
         <span>W</span>elcome to Planoo TaskMaster, where we've crafted the ultimate task management solution to simplify your life and boost your productivity. Our mission is straightforward: to empower individuals and teams to accomplish more by revolutionizing the way you organize, prioritize, and complete tasks. With a sleek and intuitive interface, TaskMaster offers flexible task organization through lists, boards, or timelines, alongside collaborative tools for seamless team collaboration. Customize workflows, tags, and priorities to fit your unique needs, and enjoy cross-platform accessibility for anytime, anywhere task management. Say goodbye to scattered to-do lists and missed deadlines; with TaskMaster, you'll stay organized and on track, accomplishing more in less time. Backed by advanced technology and a dedicated team, TaskMaster delivers a reliable task management experience. Ready to take control of your tasks? Sign up today and join the thousands already experiencing the productivity revolution with TaskMaster.
         </p>
      </div>
    </>
  )
}

export default About