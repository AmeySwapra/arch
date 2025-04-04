import React from "react";
import Header from "../componets/common/Header";
import Banner from "../componets/common/Banner";
import Footer from "../componets/common/Footer";
import pic1 from "../assets/banner/pic1.webp";
import Expert from "../componets/Expert";
import SocialBar from "../componets/common/SocialBar";
function ExpertPage() {
  return (
    <>
      <Header />
      <Banner
        imageUrl={pic1}
        text="Fusing logic with imagination and truth with discovery."
        title="Our Experts"
      />
      <SocialBar/>
      <Expert/>
      <Footer />
    </>
  );
}

export default ExpertPage;
