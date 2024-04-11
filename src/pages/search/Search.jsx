import "./Search.css";

import Navbar from "../../components/Navbar";
import SearchForm from "../../components/SearchForm";

export default function Search() {
  return (
    <div className="app">
      <div className="app-content">
        <Navbar />
        <SearchForm />
      </div>
    </div>
  );
}
