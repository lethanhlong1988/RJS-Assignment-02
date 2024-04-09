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
  // const {
  //   data: loadDatas,
  //   isLoading,
  //   error,
  // } = useHttp(link, requestConfig, []);

  // if (loadDatas) {
  //   if (
  //     !loadDatas ||
  //     loadDatas.length === 0 ||
  //     !loadDatas.results ||
  //     loadDatas.results.length === 0
  //   ) {
  //     setGotVideo(false);
  //   } else {
  //     const firstMatchingVideo = loadDatas.results.find(
  //       video.site === "YouTube" &&
  //         (video.type === "Trailer" || video.type === "Teaser"),
  //     );
  //     if (!firstMatchingVideo || firstMatchingVideo.length === 0) {
  //       setGotVideo(false);
  //     }
  //   }
  // }

  // if (isLoading) {
  //   return <p className="isLoading">Fetching Trailer ...</p>;
  // }

  // if (error) {
  //   console.log(error);
  //   return (
  //     <div className="movie-trailer-container">
  //       <div>Movie Trailer-Long</div>
  //       {img}
  //     </div>
  //   );
  // }

  // if (!gotVideo) {
  //   console.log(gotVideo);
  //   return (
  //     <div className="movie-trailer-container">
  //       <div>Movie Trailer-Long</div>
  //       {img}
  //     </div>
  //   );
  // }

  // if (loadDatas && loadDatas.results) {
  //   const firstMatchingVideo = loadDatas.results.find(
  //     video.site === "YouTube" &&
  //       (video.type === "Trailer" || video.type === "Teaser"),
  //   );
  //   setCurrentKey(firstMatchingVideo.key);
  // }

  return (
    <div className="movie-trailer-container">
      <div>Movie Trailer</div>
      {/* {currentKey && <YoutubeVideo videoId={currentKey} />} */}
      {img}
    </div>
  );
}
