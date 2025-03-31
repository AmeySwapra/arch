import React from "react";
import Header from "../componets/common/Header";
import Banner from "../componets/common/Banner";
import IndustrialArchitecture from "../componets/IndustrialArchitecture";
import Footer from "../componets/common/Footer";
import pic2 from '../assets/banner/pic3.webp'
function InteriorDesignPage() {
  return (
    <>
      <Header />
      <Banner
        imageUrl={pic2}
        text="Passionate about great architecture and all things sustainable."
        title="Interior Design Services"
      />
      <IndustrialArchitecture/>
      <Footer/>
    </>
  );
}

export default InteriorDesignPage;
