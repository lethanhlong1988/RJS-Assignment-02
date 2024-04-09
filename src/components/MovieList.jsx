import "./MovieList.css";

import useHttp from "./hooks/useHttp";

import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail";

const requestConfig = {};

export default function MovieList({ name, link, view }) {
  const requestLink = link;
  const dataRequest = useHttp(requestLink, requestConfig, []);

  if (dataRequest.isLoading) {
    return <p>Fetching Movies ...</p>;
  }

  if (dataRequest.error) {
    return <p>Something went wrong ...</p>;
  }
  const movieList = dataRequest.data.results;
  if (!movieList || movieList.length === 0) {
    return <p>No movies found!!!</p>;
  }

  return (
    <ul className="movie-list-container">
      {!view ? (
        <div className="movie-list">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} view={false} />
          ))}
        </div>
      ) : (
        <div className="movie-list">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} view={true} />
          ))}
        </div>
      )}
      {/* <MovieDetail /> */}

      <h3>{name}</h3>
    </ul>
  );
}
