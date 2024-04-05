import { useContext } from "react";
import "./MovieDetail.css";

import YoutubeVideo from "./YoutubeVideo";
import SelectedMovieContext from "../store/SelectedMovieContext";
import useHttp from "./hooks/useHttp";

const requestConfig = {};
export default function MovieDetail() {
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
  // const loadVideos = loadData.id;
  // console.log(loadData);
  // const firstMatchingVideo = dataRequest.data.results.find(
  //   (video) =>
  //     video.site === "YouTube" &&
  //     (video.type === "Trailer" || video.type === "Teaser"),
  // );
  // console.log(firstMatchingVideo);
  if ((currentMovie = {})) {
    return <div></div>;
  }
  return (
    <div className="movie-detail-container">
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
      <div className="movie-video">{<YoutubeVideo />}</div>
    </div>
  );
}
