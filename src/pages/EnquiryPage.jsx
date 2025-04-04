import React from 'react'
import Header from '../componets/common/Header'
import Footer from '../componets/common/Footer'
import ContactForm from '../componets/ContactForm'
import Banner from '../componets/common/Banner'
import pic1 from "../assets/banner/pic3.webp";
import SocialBar from '../componets/common/SocialBar'
function EnquiryPage() {
  return (
    <>
       <Header/>
       <Banner
        imageUrl={pic1}
        text="Fusing logic with imagination and truth with discovery."
        title="Get Qoute"
      />
      <SocialBar/>
       <ContactForm/>
       <Footer/>
    </>
  )
}

export default EnquiryPage