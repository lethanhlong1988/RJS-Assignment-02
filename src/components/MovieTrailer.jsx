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

  const { gotKey, isLoading, error } = useGetVideo(link, requestConfig, []);
  if (isLoading) {
    return <p className="isLoading">Loading ...</p>;
  }
  if (error || gotKey === null) {
    return <div className="movie-trailer-container">{img}</div>;
  }

  return (
    <div className="movie-trailer-container">
      {gotKey && <YoutubeVideo videoId={gotKey} />}
    </div>
  );
}
