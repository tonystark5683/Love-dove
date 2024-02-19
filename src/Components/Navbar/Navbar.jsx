import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [open, setopen] = useState(false);
  const [navStlye, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });
  return (
    <div className={`n-wrapper ${navStlye}`}>
      <div className="container">
        <div className="n-container">
          {/* logo part */}
          <div className="n-logo">MAFKIN ROBOTICS</div>

          {/* Right */}
          <div className="n-right">
            <div className="options">
              {" "}
              <Link to="h-wrapper" spy={true} smooth={true} offset={-100}>
                <span>Home</span>
              </Link>
              <Link to="hiw-wrapper" spy={true} smooth={true} offset={-70}>
                <span>Services</span>
              </Link>
              <Link to="" spy={true} smooth={true} offset={-100}>
                <span>Career</span>
              </Link>
              <Link to="timeline-section" spy={true} smooth={true} offset={-65}>
                <span>About </span>
              </Link>
            </div>
            <Link to="contact-section" spy={true} smooth={true} offset={-65}>
              <div className="get-quote">Contact Us</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="nm-container">
        <span>MAFKIN ROBOTICS</span>
        {!open ? (
          <BiMenuAltRight size={30} onClick={() => setopen(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setopen(false)} />
        )}

        <div
          className="m-options"
          style={{ transform: open && "translateX(0%)" }}
        >
          <Link
            to="h-wrapper"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={() => setopen(false)}
          >
            <span>Home</span>
          </Link>
          <Link
            to="hiw-wrapper"
            spy={true}
            smooth={true}
            offset={-45}
            onClick={() => setopen(false)}
          >
            <span>Services</span>
          </Link>
          
          <Link
            to="od-wrapper"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={() => setopen(false)}
          >
            <span>Career</span>
          </Link>
          <Link
            to="timeline-section"
            spy={true}
            smooth={true}
            offset={-55}
            onClick={() => setopen(false)}
          >
            <span>About </span>
          </Link>
          <Link
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-58}
            onClick={() => setopen(false)}
          >
            <div className="mget-quote">Contact Us</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
