import { createContext, useState } from "react";

const API_KEY = "ebdfe99a5e2ab4ba5d1256336c5f3fa4";

const SelectedMovieContext = createContext({
  selectedMovie: {},
  selectMovie: (movie) => {},
  link: "",
  viewOn: false,
});

export function SelectedMovieContextProvider({ children }) {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [currentLink, setCurrentLink] = useState("");
  const [viewOn, setViewOn] = useState(false);

  function selectMovie(movie) {
    const link = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`;
    setSelectedMovie(movie);
    setCurrentLink(link);
    // setViewOn((preViewOn) => !preViewOn);
    setViewOn(true);
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
