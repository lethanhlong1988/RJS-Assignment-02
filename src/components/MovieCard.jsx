import React from "react";
import "./MovieCard.css";

import Button from "../components/UI/Button";

export default function MovieCard({ movie, view }) {
  const backDropView = view;
  return (
    <li className="movie-card">
      <Button textOnly>
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
