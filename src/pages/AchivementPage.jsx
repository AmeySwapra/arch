import React from "react";
import Header from "../componets/common/Header";
import Banner from "../componets/common/Banner";
import Footer from "../componets/common/Footer";
import pic3 from "../assets/banner/pic3.webp";
import Achievements from "../componets/Achievements";
import SocialBar from "../componets/common/SocialBar";

function AchivementPage() {
  return (
    <>
      <Header />
      <Banner
        imageUrl={pic3}
        text="Delivering architecture, planning, and design globally."
        title="Our Achievements"
      />
      <SocialBar/>
      <Achievements/>
      <Footer/>
    </>
  );
}

export default AchivementPage;
