import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import heroTitle from "../../assets/hero_title.png";
import heroBanner from "../../assets/hero_banner.jpg";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={heroBanner} alt="" className="banner-image" />
        <div className="hero-caption">
          <img src={heroTitle} alt="" className="caption-image" />
          <p>Unwind the ancient city</p>
          <div className="hero-buttons">
            <button className="btn">
              <img src={playIcon} alt="" />
              Play
            </button>
            <button className="btn darkbtn">
              <img src={infoIcon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Blockbuster Movies" category={"top_rated"} />
        <TitleCards title="Upcoming" category={"upcoming"}/>
        <TitleCards title="Only on Netflix" category={"popular"} />
        <TitleCards title="Top Pics for You" category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
};
export default Home;
