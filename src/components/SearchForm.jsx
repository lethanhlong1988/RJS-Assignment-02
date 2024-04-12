import { useRef, useState } from "react";

import { ImSearch } from "react-icons/im";
import "./SearchForm.css";
import Button from "./UI/Button";

export default function SearchForm({ onDataSubmit }) {
  const [inputData, setInputData] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setInputData(event.target.value);
  }

  function handleSearch() {
    onDataSubmit(inputData);
  }

  function handleReset() {
    onDataSubmit("");
    document.getElementById("input").value = "";
  }

  return (
    <div className="search-form-container">
      <div className="search-table">
        <div className="input-form">
          <input className="input-item" id="input" onChange={handleChange} />
          <label className="input-label" htmlFor="input">
            <ImSearch />
          </label>
        </div>
        <div className="custom-br"></div>
        <div className="action-form">
          <Button textOnly className="reset-button" onClick={handleReset}>
            Reset
          </Button>
          <Button className="search-button" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
