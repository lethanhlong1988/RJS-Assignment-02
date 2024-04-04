import { useContext } from "react";
import useHttp from "./hooks/useHttp";

import MovieContext from "../store/MovieContext";

const requestConfig = {};
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
export default function MovieList() {
  // const AppCtx = useContext(MovieContext);
  // console.log(AppCtx.linkTrending);
  const dataRequest = useHttp(linkTrending, requestConfig, []);
  console.log(dataRequest.data.results);

  return (
    <div>
      <div>Movie List</div>
    </div>
  );
}
