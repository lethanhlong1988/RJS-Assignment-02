import React, { useState, useRef } from "react";
import YouTube from "react-youtube";

const YoutubeVideo = () => {
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

  return <YouTube videoId="P9pai8K8AaY" opts={opts} onReady={onReady} />;
};

export default YoutubeVideo;
