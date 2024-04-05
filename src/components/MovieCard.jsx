import React from "react";

import { useContext } from "react";

import "./MovieCard.css";

import Button from "../components/UI/Button";
import SelectedMovieContext from "../store/SelectedMovieContext";

export default function MovieCard({ movie, view }) {
  const backDropView = view;
  const SelectedMovieCtx = useContext(SelectedMovieContext);

  function selectedMovie(movie) {
    SelectedMovieCtx.selectMovie(movie);
  }
  return (
    <li className="movie-card">
      <Button textOnly onClick={() => selectedMovie(movie)}>
        {backDropView ? (
          <img
            className="poster-image"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt="Pic"
          />
        ) : (
          <img
            className="poster-image"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Pic"
          />
        )}
      </Button>
    </li>
  );
}
