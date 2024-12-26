import React from 'react'
import Banner from './components/Banner'
import Features from './components/Features'

export default  function feature() {
  return (
    <>
     <Banner page="Objectives" header="Our Objectives"/>
     <Features/>
    </>
  )
}
feature.getInitialProps = async () => {
  return {
    pageTitle: "Objectives", // Dynamically set the page title
  };
};

