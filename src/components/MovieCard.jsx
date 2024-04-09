import React from "react";

import { useContext, useRef } from "react";

import SelectedMovieContext from "../store/SelectedMovieContext";
import "./MovieCard.css";

import Button from "../components/UI/Button";

export default function MovieCard({ movie, view }) {
  const backDropView = view;
  const selectedMovieCtx = useContext(SelectedMovieContext);

  function selectedMovie(movie) {
    selectedMovieCtx.selectMovie(movie);
    console.log(movie);
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
