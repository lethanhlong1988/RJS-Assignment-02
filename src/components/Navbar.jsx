import React, { useEffect } from "react";
import "./Navbar.css";
import Button from "./UI/Button.jsx";
import { ImSearch } from "react-icons/im";

export default function Navbar() {
  const goBrowsePageHandler = (e) => {
    e.preventDefault();
    window.location.replace("/");
  };

  const goSearchPageHandler = (e) => {
    e.preventDefault();
    window.location.replace("/search");
  };

  useEffect(() => {
    const handleScroll = () => {
      var navbar = document.querySelector(".navbar");
      if (window.scrollY > 25) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Removed unnecessary dependency array

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Button textOnly onClick={goBrowsePageHandler}>
          Movie App
        </Button>
        <Button textOnly className="find-icon" onClick={goSearchPageHandler}>
          <ImSearch />
        </Button>
      </div>
    </div>
  );
}
