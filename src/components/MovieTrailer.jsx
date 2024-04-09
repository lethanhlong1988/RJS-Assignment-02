import { useState, useEffect } from "react";

import useHttp from "./hooks/useHttp";

import YoutubeVideo from "./YoutubeVideo";

import "./MovieTrailer.css";

const requestConfig = {};
export default function MovieTrailer({ movie, link }) {
  const [gotVideo, setGotVideo] = useState(true);
  const [currentKey, setCurrentKey] = useState(null);
  const img = (
    <img
      className="poster-image-0"
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt="Pic"
    />
  );
  console.log(link);
  

  return (
    <div className="movie-trailer-container">
      <div>Movie Trailer</div>
      {/* {currentKey && <YoutubeVideo videoId={currentKey} />} */}
      {img}
    </div>
  );
}
