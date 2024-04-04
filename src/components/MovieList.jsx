import "./MovieList.css";

import useHttp from "./hooks/useHttp";

import MovieCard from "./MovieCard";

const requestConfig = {};

export default function MovieList({ name, link }) {
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
  const view = false;
  return (
    <ul className="movie-list-container">
      {view ? (
        <div className="movie-list">
          {movieList.map((movie, index) => (
            <MovieCard key={index} movie={movie} view={true} />
          ))}
        </div>
      ) : (
        <div className="movie-list">
          {movieList.map((movie, index) => (
            <MovieCard key={index} movie={movie} view={false} />
          ))}
        </div>
      )}

      <h3>{name}</h3>
    </ul>
  );
}
