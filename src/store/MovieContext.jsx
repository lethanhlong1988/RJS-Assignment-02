import { createContext } from "react";
import { requests } from "./apiKey";

const MovieContext = createContext({
  subjectTrending: [],
  subjectList: [],
});

export function MovieContextProvider({ children }) {
  const movieContext = {
    subjectTrending: [
      {
        id: 1,
        name: "Trending",
        link: `https://api.themoviedb.org/3${requests.fetchTrending}`,
      },
    ],
    subjectList: [
      {
        id: 2,
        name: "Netflix Originals",
        link: `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`,
      },
      {
        id: 3,
        name: "Top Rated",
        link: `https://api.themoviedb.org/3${requests.fetchTopRated}`,
      },
      {
        id: 4,
        name: "Action Movies",
        link: `https://api.themoviedb.org/3${requests.fetchComedyMovies}`,
      },
      {
        id: 5,
        name: "Comedy Movies",
        link: `https://api.themoviedb.org/3${requests.fetchTrending}`,
      },
      {
        id: 6,
        name: "Horror Movies",
        link: `https://api.themoviedb.org/3${requests.fetchHorrorMovies}`,
      },
      {
        id: 7,
        name: "Romance Movies",
        link: `https://api.themoviedb.org/3${requests.fetchRomanceMovies}`,
      },
      {
        id: 8,
        name: "Documentaries",
        link: `https://api.themoviedb.org/3${requests.fetchDocumentaries}`,
      },
      {
        id: 9,
        name: " Search",
        link: `https://api.themoviedb.org/3${requests.fetchSearch}`,
      },
    ],
  };
  return (
    <MovieContext.Provider value={movieContext}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
