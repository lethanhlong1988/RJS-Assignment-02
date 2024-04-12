import { useState, useContext } from "react";

import "./Search.css";
import { API_KEY } from "../../store/apiKey";

import Navbar from "../../components/Navbar";
import SearchForm from "../../components/SearchForm";
import MovieList from "../../components/MovieList";
import MovieDetail from "../../components/MovieDetail";
import SelectedMovieContext from "../../store/SelectedMovieContext";

const key_word = "batman";
const link =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

export default function Search() {
  const [searChContent, setSearchContent] = useState("");
  const selectedMovieCtx = useContext(SelectedMovieContext);
  function handleSearch(data) {
    setSearchContent(data);
    console.log(searChContent);
  }

  return (
    <div className="app">
      <div className="app-content">
        <Navbar />
        <SearchForm onDataSubmit={handleSearch} />
        <div className="search-list">
          <MovieList
            className="search-list"
            name="Search Result"
            link={`${link}&api_key=${API_KEY}&query=${searChContent}`}
            view={false}
          />
        </div>
        <div>{selectedMovieCtx.viewOn && <MovieDetail />}</div>
      </div>
    </div>
  );
}
