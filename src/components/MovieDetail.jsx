import { useContext, useState } from "react";
import "./MovieDetail.css";

import YoutubeVideo from "./YoutubeVideo";
import SelectedMovieContext from "../store/SelectedMovieContext";
import useHttp from "./hooks/useHttp";

import Button from "./UI/Button";

const requestConfig = {};
export default function MovieDetail() {
  const [gotVideo, setGotVideo] = useState(true);
  const movieCtx = useContext(SelectedMovieContext);
  const currentMovie = movieCtx.selectedMovie;
  const requestLink = movieCtx.link;
  const {
    data: loadData,
    isLoading,
    error,
  } = useHttp(requestLink, requestConfig, []);

  if (isLoading) {
    return <p>Fetching Movies ...</p>;
  }

  if (error) {
    return <p>Something went wrong ...</p>;
  }

  if (!loadData || loadData.length === 0) {
    return <p>No Video found!!!</p>;
  }
  if (!loadData.results || loadData.results.length === 0) {
    return (
      <div className="movie-detail-container">
        <div className="movie-detail-content">
          <div className="movie-detail">
            <h2>No information</h2>
            <hr />
            <p>
              <strong>Release Date: No information</strong>
              <br />
              <strong>Vote: No information</strong>
            </p>

            <p>No information</p>
          </div>
          <div className="movie-video">
            <div className="video-content">No information</div>
          </div>
        </div>
      </div>
    );
  }
  console.log(loadData.results);
  const firstMatchingVideo = loadData.results.find(
    (video) =>
      video.site === "YouTube" &&
      (video.type === "Trailer" || video.type === "Teaser"),
  );
  console.log(firstMatchingVideo.key);
  if (!firstMatchingVideo || firstMatchingVideo.length === 0) {
    setGotVideo(false);
    return <p>No Video found!!!</p>;
  }
  const currentKey = firstMatchingVideo.key;

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-content">
        <div className="movie-detail">
          <h2>{currentMovie.title}</h2>
          <hr />
          <p>
            <strong>Release Date: {currentMovie.release_date}</strong>
            <br />
            <strong>Vote: {currentMovie.vote_average}/10</strong>
          </p>

          <p>{currentMovie.overview}</p>
        </div>
        <div className="movie-video">
          <div className="video-content">
            {gotVideo ? <YoutubeVideo videoId={currentKey} /> : <p>No Video</p>}
            {/* <YoutubeVideo videoId={currentKey} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
