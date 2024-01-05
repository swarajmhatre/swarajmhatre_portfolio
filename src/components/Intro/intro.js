import React from "react";
import "./intro.css";
import bg from "../../assets/Profile.jpg";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png"
function Intro() {
  const OpenResume = ()=>{
    const resumeURL =  process.env.PUBLIC_URL + '/Swaraj_Nitin_Mhatre_Resume.pdf'
    window.open(resumeURL, '_blank')
  }
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Swaraj</span><br/>Website Designer</span>
        <p className="introPara">I am a skilled Web Developer with experience in creating appealingWeb Applications.</p>
        <Link ><button className="btn" onClick={OpenResume}><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
}

export default Intro;
