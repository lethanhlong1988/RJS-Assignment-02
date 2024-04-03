import { createContext } from "react";

const MovieContext = createContext({
  objectList: [],
  movieList: [],
});

export function MovieContextProvider({ children }) {
  const movieContext = {
    objectList: [
      "Trending",
      "Netflix Originals",
      "Top Rated",
      "Action Movies",
      "Comedy Movies",
      "Horror Movies",
      "Romance Movies",
      "Documentaries",
      " Search",
    ],
    movieList: [],
  };
  return (
    <MovieContext.Provider value={movieContext}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
