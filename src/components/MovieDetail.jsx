import { useContext } from "react";
import "./MovieDetail.css";

import YoutubeVideo from "./YoutubeVideo";
import SelectedMovieContext from "../store/SelectedMovieContext";
import useHttp from "./hooks/useHttp";

import MovieTrailer from "./MovieTrailer";

export default function MovieDetail() {
  const movieCtx = useContext(SelectedMovieContext);
  const currentMovie = movieCtx.selectedMovie;
  const requestLink = movieCtx.link;

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-content">
        <div className="movie-detail">
          <h2>{currentMovie.title || currentMovie.name}</h2>
          <hr />
          <p>
            <strong>Release Date: {currentMovie.release_date || " "}</strong>
            <br />
            <strong>Vote: {currentMovie.vote_average}/10</strong>
          </p>

          <p>{currentMovie.overview}</p>
        </div>
        <div className="movie-video">
          <div className="video-content">
            <MovieTrailer movie={currentMovie} link={requestLink} />
          </div>
        </div>
      </div>
    </div>
  );
}
