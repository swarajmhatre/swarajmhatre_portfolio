import React, { useRef } from "react";
import "./contact.css";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/libnkedin.png";
import GithubIcon from "../../assets/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const socialMediaLinks = {
    github: "https://github.com/swarajmhatre",
    linkedin: "https://www.linkedin.com/in/swaraj-mhatre-a054a6205/",
    twitter: "https://www.twitter.com/feed/",
  };

  function handleClick(socialMedia) {
    const url = socialMediaLinks[socialMedia];
    if (url) {
      window.open(url, "_blank");
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hs9wp3x",
        "template_vr5zh1f",
        form.current,
        "D2qnJWVzKxfT51cG3"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the from below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="name"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="user_email"
            className="email"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Your Message"
          />
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="Links">
            <img src={GithubIcon} alt="GithubIcon" className="Link" value= "github.com/swarajmhatre" onClick={()=>{
              handleClick("github")
            }}/>
            <img src={InstagramIcon} alt="InstagramIcon" className="Link" value= "" onClick={()=>{
              handleClick("linkedin")
            }}/>
            <img src={TwitterIcon} alt="TwitterIcon" className="Link" value="" onClick={()=>{
              handleClick("twitter")
            }}/>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
