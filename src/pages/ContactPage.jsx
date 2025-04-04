import React from "react";
import Header from "../componets/common/Header";
import ContactInfo from "../componets/ContactInfo";
import Footer from "../componets/common/Footer";
import pic1 from "../assets/banner/pic1.webp";
import Banner from "../componets/common/Banner";
import SocialBar from "../componets/common/SocialBar";

function ContactPage() {
  return (
    <>
      <Header />
      <Banner
        imageUrl={pic1}
        text="Inspired design for people"
        title="Contact Us"
      />
      <SocialBar/>
      <ContactInfo/>
      <Footer/>
    </>
  );
}

export default ContactPage;
