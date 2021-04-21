import React from "react";
import asset1 from "../assets/asset1.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import { useHistory } from "react-router-dom";
function Intro() {
  const history = useHistory();
  return (
    <div className="intro-container">
      <div
        className="nav-branding"
        onClick={() => {
          history.push(`/`);
        }}
        aria-label="Adsoul"
      >
        adsoul
      </div>
      <div className="illustration">
        <img src={asset1} alt="illustration" />
      </div>
      <div className="services">
        <div className="h3">Revenue Optimisation</div>
        <div className="grid-container">
          <div className="each-service">
            <img src={icon1} alt="Service Offered" />
            Fill Rate
          </div>
          <div className="each-service">
            <img src={icon2} alt="Service Offered" />
            Improve CTR
          </div>
          <div className="each-service">
            <img src={icon3} alt="Service Offered" />
            Refresh Rate
          </div>
          <div className="each-service">
            <img src={icon4} alt="Service Offered" />
            Quick Integration
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
