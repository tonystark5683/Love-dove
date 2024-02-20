import React from "react";
import basestyle from "../Base.module.css";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";
import logo from "./logolov.jpg";
import pic from "./pic.png";
import AddUser from "../AddUser/AddUser";

const Profile = ({ setUserState, username }) => {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });

  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });
  return (

      <div className="profile">
        <nav>
          <img src={logo} className="logo" alt=""></img>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
          <div>
            <a href="" className="login-btn">
              Welcome {username} !!
            </a>
            <button className="btn" onClick={() => setUserState({})}>
              Log Out
            </button>
          </div>
        </nav>
        <div className="content">
          <h1 className="anim">
            Make
            <br />
            New Friends
          </h1>
          <p className="anim">
            LoveHub aims to revolutionize matchmaking within college campuses,
            providing a platform for students to discreetly share their crushes.{" "}
          </p>
          <a href="" className="btn anim">
            Explore Now
          </a>
        </div>
        <img src={pic} alt="" className="feature-img anim"></img>
        {/* <section id="header">
    <div className="header container">
      <div className="nav-bar">
        <div className="brand">
          <a href="#hero">
            <h1><span>K</span>urmi <span>S</span>ourav</h1>
          </a>
        </div>
        <div className="nav-list">
          <div className="hamburger">
            <div className="bar"></div>
          </div>
          <ul>
            <li><a href="#hero" data-after="Home">Home</a></li>
            <li><a href="#services" data-after="Service">Skills</a></li>
            <li><a href="#projects" data-after="Projects">Projects</a></li>
            <li><a href="#about" data-after="About">About</a></li>
            <li><a href="#contact" data-after="Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>


  <section id="hero">
    <div className="hero container">
      <div>
        <h1>Hello, There!! <span></span></h1>
        <h1>I Am Sourav <span></span></h1>
        <h1>Web-Developer</h1>
        <a href="#projects" type="button" className="cta">Portfolio</a>
      </div>
    </div>
  </section> */}
      </div>
      
  );
};
export default Profile;
