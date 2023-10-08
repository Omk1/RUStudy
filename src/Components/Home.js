import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/Rutgers_Logo_.png";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Find a study group where you truly belong!
          </h1>
          <p className="primary-text">
            This simple group planner allows students to work with people in the same classes, at your desired time and location. 
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <About />
      
      
    </div>
    
  );
};

export default Home;
