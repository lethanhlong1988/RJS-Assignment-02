import { createContext, useState, useRef } from "react";
import { API_KEY } from "./apiKey";

const SelectedMovieContext = createContext({
  selectedMovie: {},
  selectMovie: (movie) => {},
  link: "",
  viewOn: false,
});

export function SelectedMovieContextProvider({ children }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentLink, setCurrentLink] = useState(null);
  const [viewOn, setViewOn] = useState(false);

  function selectMovie(movie) {
    const link = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`;
    setSelectedMovie(movie);
    setCurrentLink(link);
    setViewOn((preMovie) => {
      if ((preMovie = movie)) {
        setViewOn((preViewOn) => !preViewOn);
      } else {
        setViewOn(true);
      }
    });
    console.log("selected");
  }

  const selectedMovieContext = {
    selectedMovie,
    selectMovie,
    link: currentLink,
    viewOn,
  };

  return (
    <SelectedMovieContext.Provider value={selectedMovieContext}>
      {children}
    </SelectedMovieContext.Provider>
  );
}

export default SelectedMovieContext;
