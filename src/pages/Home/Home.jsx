import React from "react";
import Attraction from "../../components/Attraction/Attraction";
import GamesAndExp from "../../components/GamesAndExp/GamesAndExp";
import Header from "../../components/Header/Header";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Who from "../../components/whoIs/Who";
import About from "../../components/About/About";
import Testimonial from "../../components/testimonials/Testimonial";
import Questions from "../../components/Questions/Questions";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar></Navbar>
      <Header />
      <Attraction />
      <HowItWorks />
      <GamesAndExp />
      <Slider></Slider>
      <Who></Who>
      <About></About>
      <Testimonial></Testimonial>
      <Questions></Questions>
      <Contact></Contact>
      <Footer></Footer>
     
    </div>
  );
};

export default Home;
