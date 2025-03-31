import React from "react";
import Header from "../componets/common/Header";
import Footer from "../componets/common/Footer";
import Banner from "../componets/common/Banner";
import pic1 from "../assets/banner/pic1.webp";
import CompanyProfile from "../componets/CompanyProfile";
import MissionVisionTabs from "../componets/common/MissionVisionTabs";

function CompanyProfilePage() {
  return (
    <>
      <Header />
      <Banner
        imageUrl={pic1}
        text="Fusing logic with imagination and truth with discovery."
        title="Company Profile"
      />
      <CompanyProfile/>
      <MissionVisionTabs/>
      <Footer />
    </>
  );
}

export default CompanyProfilePage;
