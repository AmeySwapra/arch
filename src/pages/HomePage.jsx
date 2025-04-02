import React from 'react'
import Header from '../componets/common/Header'
import Footer from '../componets/common/Footer'
import BeforeAfterSlider from '../componets/BeforeAfterSlider'
import About from '../componets/About'
import LatestProjects from '../componets/LatestProjects'
import ProcessSection from '../componets/ProcessSection'
import ServicesSection from '../componets/ServicesSection'
import ClientLogos from '../componets/ClientLogos'
import SocialBar from '../componets/common/SocialBar'


function HomePage() {
  return (
    <>
      <Header/>
      <BeforeAfterSlider/>
      <About/>
      <SocialBar/>
      <LatestProjects/>
      <ProcessSection/>
      <ServicesSection/>
      <ClientLogos/>
      <Footer/>
    </>
  )
}

export default HomePage