import "./Search.css";
import { API_KEY } from "../../store/apiKey";

import Navbar from "../../components/Navbar";
import SearchForm from "../../components/SearchForm";
import MovieList from "../../components/MovieList";

const key_word = "mickey";
const link =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

export default function Search() {
  return (
    <div className="app">
      <div className="app-content">
        <Navbar />
        <SearchForm />
        <div className="search-list">
          <MovieList
            className="search-list"
            name="Search Result"
            link={`${link}&api_key=${API_KEY}&query=${key_word}`}
            view={false}
          />
        </div>
      </div>
    </div>
  );
}
