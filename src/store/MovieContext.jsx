import { createContext } from "react";

const API_KEY = "ebdfe99a5e2ab4ba5d1256336c5f3fa4";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};
const linkTrending = `https://api.themoviedb.org/3${requests.fetchTrending}`;
const linkNetflixOriginals = `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`;
const linkTopRated = `https://api.themoviedb.org/3${requests.fetchTopRated}`;
const linkActionMovies = `https://api.themoviedb.org/3${requests.fetchActionMovies}`;
const linkComedyMovies = `https://api.themoviedb.org/3${requests.fetchComedyMovies}`;
const linkHorrorMovies = `https://api.themoviedb.org/3${requests.fetchHorrorMovies}`;
const linkRomanceMovies = `https://api.themoviedb.org/3${requests.fetchRomanceMovies}`;
const linkDocumentaries = `https://api.themoviedb.org/3${requests.fetchDocumentaries}`;
const linkSearch = `https://api.themoviedb.org/3${requests.fetchSearch}`;

const MovieContext = createContext({
  objectList: [],
  movieList: [],
  linkTrending: "",
  linkNetflixOriginals: "",
  linkTopRated: "",
  linkActionMovies: "",
  linkComedyMovies: "",
  linkHorrorMovies: "",
  linkRomanceMovies: "",
  linkDocumentaries: "",
  linkSearch: "",
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
    linkTrending: `https://api.themoviedb.org/3${requests.fetchTrending}`,
    linkNetflixOriginals: `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`,
    linkTopRated: `https://api.themoviedb.org/3${requests.fetchTopRated}`,
    linkActionMovies: `https://api.themoviedb.org/3${requests.fetchActionMovies}`,
    linkComedyMovies: "",
    linkHorrorMovies: "",
    linkRomanceMovies: "",
    linkDocumentaries: "",
    linkSearch: "",
  };
  return (
    <MovieContext.Provider value={movieContext}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
