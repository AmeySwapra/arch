import React from "react";
import Header from "../componets/common/Header";
import Banner from "../componets/common/Banner";
import Footer from "../componets/common/Footer";
import pic5 from "../assets/banner/pic5.webp";
import Gallery from "../componets/common/Gallery";
function ProjectPage() {
  return (
    <>
      <Header />
      <Banner
        imageUrl={pic5}
        text="Exploring our clients goals, priorities, lifestyle, and tastes"
        title="Our Projects"
      />
      <Gallery/>
      <Footer/>
    </>
  );
}

export default ProjectPage;
