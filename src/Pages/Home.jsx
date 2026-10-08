import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Why_Hemo from "../components/Why_Hemo";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


function Home() {
  return (
     <>
       <Navbar/>
      <Hero/>
      <HowItWorks/>
      <Why_Hemo/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default Home