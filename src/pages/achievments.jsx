import React from 'react'
import Banner from './components/Banner'
import Achievements from './components/Achievments'

export default function achievements() {
  return (
   <>
   <Banner page="Achievements" header="Achievements"/>
   <Achievements />
   </>
  )
}

achievements.getInitialProps = async () => {
    return {
      pageTitle: "Achievements", // Dynamically set the page title
    };
  };
  