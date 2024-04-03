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
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 25) {
      // Kiểm tra nếu đã cuộn xuống quá 100px
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Button textOnly onClick={goBrowsePageHandler}>
          Movive App
        </Button>
        <Button textOnly className="find-icon" onClick={goSearchPageHandler}>
          <ImSearch />
        </Button>
      </div>
    </div>
  );
}
