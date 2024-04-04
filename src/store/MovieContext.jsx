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

const MovieContext = createContext({
  subjectList: [],
});

export function MovieContextProvider({ children }) {
  const movieContext = {
    subjectList: [
      {
        id: 1,
        name: "Trending",
        link: `https://api.themoviedb.org/3${requests.fetchTrending}`,
      },
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
