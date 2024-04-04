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
  console.log(movieList);

  return (
    <ul className="movie-list-container">
      <li className="movie-list">
        {movieList.map((movie, index) => (
          <MovieCard
            key={index}
            className="movie-item"
            title={movie.title}
            link={requestLink}
            movie={movie}
          />
        ))}
      </li>
      <h3>{name}</h3>
    </ul>
  );
}
