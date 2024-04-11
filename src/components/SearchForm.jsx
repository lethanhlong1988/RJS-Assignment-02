import { ImSearch } from "react-icons/im";
import "./SearchForm.css";
import Button from "./UI/Button";

export default function SearchForm() {
  return (
    <div className="search-form-container">
      <div className="search-table">
        <div className="input-form">
          <input className="input-item" id="input" />
          <label className="input-label" htmlFor="input">
            <ImSearch />
          </label>
        </div>
        <div className="custom-br"></div>
        <div className="action-form">
          <Button textOnly className="reset-button">
            Reset
          </Button>
          <Button className="search-button">Search</Button>
        </div>
      </div>
    </div>
  );
}
