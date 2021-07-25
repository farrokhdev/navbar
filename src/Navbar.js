import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links, socials } from "./data";

const Navbar = () => {
  const toggleNavRef = useRef(null);
  const toggleWrapperRef = useRef(null);
  const navbarRef = useRef(null);

  const [showNav, setShowNav] = useState(false);

  const [classId, setClassId] = useState(0);

  console.log(classId);

  const toggleNavbar = () => {
    setShowNav(!showNav);
    // console.log(showNav);
  };

  // console.log(links[classId].text)

  useEffect(() => {
    setShowNav(false);
    setClassId(0);
  }, []);
  useEffect(() => {
    const toggleLinksHeight = toggleWrapperRef.current.getBoundingClientRect()
      .height;
    // console.log(toggleLinksHeight);
    if (showNav) {
      toggleNavRef.current.style.height = `${toggleLinksHeight}px`;
      toggleNavRef.current.style.padding = "20px";
      toggleWrapperRef.current.style.pointerEvents = "auto";
      toggleWrapperRef.current.style.opacity = "1";
    } else {
      toggleNavRef.current.style.height = "0px";
      toggleNavRef.current.style.padding = "0px";
      toggleWrapperRef.current.style.pointerEvents = "none";
      toggleWrapperRef.current.style.opacity = "0";
    }
  }, [showNav]);

  useEffect(() => {
    navbarRef.current.className = `navbar ${links[classId].text}`;
    toggleNavRef.current.className = `toggle-links ${links[classId].text}`;
  }, [classId]);

  const changeBackground = (linkId) => {
    setClassId(linkId);
  };

  return (
    <div className="navbar" ref={navbarRef}>
      <Link to="/" className="logo" onClick={() => setClassId(0)}>
        Fadev
      </Link>
      <div className="toggle" onClick={toggleNavbar}>
        <FaBars />
      </div>
      <div className="toggle-links" ref={toggleNavRef}>
        <div className="links-wrapper" ref={toggleWrapperRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <Link to={url} key={id} onClick={() => changeBackground(id)}>
                {text}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <Link to={url} key={id} onClick={() => changeBackground(id)}>
              {text}
            </Link>
          );
        })}
      </div>
      <div className="socials">
        {socials.map((social) => {
          const { id, url, icon } = social;
          return (
            <Link to={url} key={id}>
              {icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
