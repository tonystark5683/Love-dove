import React from "react";
import basestyle from "../Base.module.css";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";
import logo from "./logolov.jpg";
import pic from "./pic.png";
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
      {/* <h1 style={{ color: "white" }}>Welcome {username} !!</h1>
      <button
        className={basestyle.button_common}
        onClick={() => setUserState({})}
      >
        Logout
      </button> */}
      <nav>
        <img src={logo} className="logo" alt="" ></img>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Services</a></li>
        </ul>
        <div>
          <a href="" className="login-btn">Sourav</a>
          <a href="" className="btn">Log Out</a>
        </div>
      </nav>
      <div className="content">
        <h1 className="anim">Make<br/>New Friends</h1>
        <p className="anim">LoveHub aims to revolutionize matchmaking within college campuses, providing a platform for students to discreetly share their crushes. </p>
        <a href="" className="btn anim" >Explore Now</a>
      </div>
      <img src={pic} alt="" className="feature-img anim"></img>

    </div>
  );
};
export default Profile;
