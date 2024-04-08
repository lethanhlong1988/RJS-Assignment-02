import { useState, useEffect, useCallback } from "react";

import useHttp from "./hooks/useHttp";

import YoutubeVideo from "./YoutubeVideo";

import "./MovieTrailer.css";

const requestConfig = {};
export default function MovieTrailer({ movie, link }) {
  const [trailerKey, setTrailerKey] = useState(null);
  const img = (
    <img
      className="poster-image-0"
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt="Pic"
    />
  );
  // const [gotVideo, setGotVideo] = useState(true);
  const getTrailer = useCallback(() => {
    const {
      data: loadData,
      isLoading,
      error,
    } = useHttp(link, requestConfig, []);
    if (isLoading) {
      return <p>Fetching Movies ...</p>;
    }
    if (error) {
      return (
        <div className="movie-trailer-container">
          <div>Movie Trailer-Long</div>
          {img}
        </div>
      );
    }
    if (!loadData || loadData.length === 0) {
      return;
      <div className="movie-trailer-container">
        <div>Movie Trailer-Long</div>
        {img}
      </div>;
    }
    if (!loadData.results || loadData.results.length === 0) {
      return;
      <div className="movie-trailer-container">
        <div>Movie Trailer-Long</div>
        {img}
      </div>;
    }
    console.log(loadData.results);
    const firstMatchingVideo = loadData.results.find(
      (video) =>
        video.site === "YouTube" &&
        (video.type === "Trailer" || video.type === "Teaser"),
    );
    console.log(firstMatchingVideo.key);
    if (!firstMatchingVideo || firstMatchingVideo.length === 0) {
      return <p>No Video found!!!</p>;
    }
    const currentKey = firstMatchingVideo.key;
    return currentKey;
  }, [link]);
  const videoKey = getTrailer();
  setTrailerKey()
  // useEffect(() => {
  //   if (
  //     !isLoading &&
  //     !error &&
  //     (!loadData ||
  //       loadData.length === 0 ||
  //       !loadData.results ||
  //       loadData.results.length === 0)
  //   ) {
  //     setGotVideo(false);
  //   }
  // }, [isLoading, error, loadData]);

  return (
    <div className="movie-trailer-container">
      <div>Movie Trailer-Long</div>
      {getTrailer && <YoutubeVideo videoId={getTrailer} />}

      {/* {gotVideo ? (
        <YoutubeVideo videoId={currentKey} />
      ) : (
        <img
          className="poster-image-0"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Pic"
        />
      )} */}
      {/* {img} */}
    </div>
  );
}
