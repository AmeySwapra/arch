import React from "react";
import Header from "../componets/common/Header";
import Banner from "../componets/common/Banner";
import IndustrialArchitecture from "../componets/IndustrialArchitecture";
import Footer from "../componets/common/Footer";
import pic2 from '../assets/banner/pic3.webp'
import SocialBar from "../componets/common/SocialBar";
function ArchitecturalServicePage() {
  return (
    <>
      <Header />
      <Banner
        imageUrl={pic2}
        text="High quality, effective, and inspiring built space."
        title="Architectural Services"
      />
      <SocialBar/>
      <IndustrialArchitecture/>
      <Footer/>
    </>
  );
}

export default ArchitecturalServicePage;
