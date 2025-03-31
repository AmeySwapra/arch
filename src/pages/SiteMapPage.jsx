import React from "react";
import Header from "../componets/common/Header";
import Banner from "../componets/common/Banner";
import pic1 from "../assets/banner/pic1.webp";
import Footer from "../componets/common/Footer";
import NavigationButtons from "../componets/NavigationButtons";

function SiteMapPage() {
  return (
    <>
      <Header />
      <Banner
        imageUrl={pic1}
        text="Inspired design for people"
        title="Sitemap"
      />
      <NavigationButtons/>
      <Footer/>
    </>
  );
}

export default SiteMapPage;
