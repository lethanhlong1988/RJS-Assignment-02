import React from 'react';
import "./MovieCard.css";
// import { useContext } from "react";

// import MovieContext from "../store/MovieContext";

export default function MovieCard({ title, link, movie }) {
  //   const movieCxt = useContext(MovieContext);
  return (
    <li>
      <article className="movie-card">
        <img src={`${link}${movie.backdrop_path}`} alt="Pic" />
        <p>{title}</p>
      </article>
    </li>
  );
}
