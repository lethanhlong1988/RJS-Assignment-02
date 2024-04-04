import useHttp from "../../components/hooks/useHttp";

import "./Browse.css";

import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import SubjectList from "../../components/SubjectList";

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
const linkNetflixOriginals = `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`;
const linkTopRated = `https://api.themoviedb.org/3${requests.fetchTopRated}`;
const linkActionMovies = `https://api.themoviedb.org/3${requests.fetchActionMovies}`;
const linkComedyMovies = `https://api.themoviedb.org/3${requests.fetchComedyMovies}`;
const linkHorrorMovies = `https://api.themoviedb.org/3${requests.fetchHorrorMovies}`;
const linkRomanceMovies = `https://api.themoviedb.org/3${requests.fetchRomanceMovies}`;
const linkDocumentaries = `https://api.themoviedb.org/3${requests.fetchDocumentaries}`;
const linkSearch = `https://api.themoviedb.org/3${requests.fetchSearch}`;
export default function Browse() {
  // const dataRequest = useHttp(linkTrending, requestConfig, []);

  // console.log(dataRequest.data.results);

  return (
    <div className="app">
      <h1>Browse</h1>
      <Navbar />
      <Banner />
      <SubjectList />
    </div>
  );
}
