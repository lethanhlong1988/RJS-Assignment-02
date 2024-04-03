import { createContext } from "react";

const MovieContext = createContext({
  movieList: [],
});

export function MovieContextProvider({ children }) {
  const movieContext = {
    movieList: [],
  };
  return (
    <MovieContext.Provider value={movieContext}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
