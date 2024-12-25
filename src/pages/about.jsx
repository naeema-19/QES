import React from 'react'
import Banner from './components/Banner'
import About from './components/About'
import Features from './components/Features'
import Process from './components/Process'
import ICVPlan from './components/ICVPlan'
import VisionMission from './components/VisionMission'
import Timeline from './components/Timeline'

export default function about() {
  return (
   <>
   
   <Banner page="About" header="About Us"/>
   <About/>
   <VisionMission />
   <Features/>
   <Process />
   <ICVPlan />
   <Timeline />
   </>
  )
}

about.getInitialProps = async () => {
  return {
    pageTitle: "About Us", // Dynamically set the page title
  };
};

 