import React from "react";
import "./works.css";
import Project1 from '../../assets/cppSTL.png';
import Project2 from '../../assets/ReactPortfolio.png';
import Project3 from '../../assets/Wags&WHiskers.png';
import Project4 from '../../assets/Packify.webp';
const Works = () => {
  const OpenWebsite = ()=>{
    window.open('https://github.com/swarajmhatre', '_blank');
  }
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        I'm a Developer who creates user-friendly interfaces and
        collaborates on robust applications, staying updated with
        latest technological developments.
        <br/>
        <br/>
        Here are some of my projects.👇
      </span>
      <div className="worksImgs">
        <div className="project">
        <img src={Project1} alt="" className="worksImg"/>
        <label>Generic C++ library</label>
        </div>
        <div className="project">
        <img src={Project2} alt="" className="worksImg"/>
        <label>React Portfolio</label>
        </div>
        <div className="project"> 
        <img src={Project3} alt="" className="worksImg"/>
        <label>Wags and Whiskers</label>
        </div>
        <div className="project">
        <img src={Project4} alt="" className="worksImg"/>
        <label>File Packer Unpacker</label>
        </div> 
      </div>
      <button className="worksBtn" onClick={OpenWebsite}>Github</button>
    </section>
  );
};

export default Works;
