import "./Navbar.css";

import Button from './UI/Button.jsx';
export default function Navbar() {
  const goBrowsePageHandler = (e) => {
    e.preventDefault();
    window.location.replace("/");
  };
  const goSearchPageHandler = (e) => {
    e.preventDefault();
    window.location.replace("/search");
  };
  return (
    <div className="navbar">
      <Button textOnly onClick={goBrowsePageHandler}>Movive App</Button>
      <Button textOnly onClick={goSearchPageHandler}>Search</Button>
    </div>
  );
}
