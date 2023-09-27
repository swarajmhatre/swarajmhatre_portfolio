import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import LeaderShip from "../../assets/leadership.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do?</span>
      <span className="skillDesc">Highly skilled computer engineering student and an expert frontend web developer with a passion for creating robust and innovative softwares.</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Experience in creating appealing User Interfaces </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Web Developement</h2>
            <p>Web Developement enthusiast and expertise in creating react Applications</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={LeaderShip} alt="AppDesign" className="skillBarImg"/>
          <div className="skillBarText">
            <h2>Leadership and Team Management</h2>
            <p>more than 2 years of experience in Leadership and Team management</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
