import { useState, useEffect } from "react";

import useGetVideo from "./hooks/useGetVideo";

import YoutubeVideo from "./YoutubeVideo";

import "./MovieTrailer.css";

const requestConfig = {};
export default function MovieTrailer({ movie, link }) {
  const img = (
    <img
      className="poster-image-0"
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt="Pic"
    />
  );
  console.log(link);

  const { currentKey, isLoading, error } = useGetVideo(link, requestConfig, []);
  if (isLoading) {
    return <p className="isLoading">Loading ...</p>;
  }
  if (error) {
    return (
      <div className="movie-trailer-container">
        <div>Movie Trailer</div>
        {img}
      </div>
    );
  }

  return (
    <div className="movie-trailer-container">
      <div>Movie Trailer</div>
      {currentKey && <YoutubeVideo videoId={currentKey} />}
      {/* {img} */}
    </div>
  );
}
