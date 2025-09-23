import "./Home.css";
import React, { useEffect, useState } from "react";
import heroImage from "./Insta.png";
function Home() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <>
      <div className="intro-container">
        <div className={`intro-content ${animate ? "slide-up" : ""}`}>
          <img src={heroImage} alt="Hero" className="hero-img" />
          <div className="info-text">
            <h1>Welcome to InstaClone</h1>
            <p>Share moments, connect with friends, and explore the world.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
