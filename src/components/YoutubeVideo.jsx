import React, { useState, useRef } from "react";
import YouTube from "react-youtube";
import Button from "./UI/Button";

const YoutubeVideo = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  const opts = {
    height: "130",
    width: "210",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    setPlayer(event.target);
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  function onView(event) {
    setPlayer(event.target);
  }

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
    </div>
  );
};

export default YoutubeVideo;
