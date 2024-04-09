import { useState, useCallback, useEffect } from "react";
import useHttp from "./useHttp";

export default function useGetVideo(url, config, initialData) {
  const [currentKey, setCurrentKey] = useState(null);
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  const [gotVideo, setGotVideo] = useState(false);

  const {
    data: loadedDatas,
    isLoading,
    error,
  } = useHttp(url, config, initialData);

  if (loadedDatas) {
    if (
      !loadedDatas ||
      loadedDatas.length === 0 ||
      !loadedDatas.results ||
      loadedDatas.results.length === 0
    ) {
      setGotVideo(false);
    } else {
      const firstMatchingVideo = loadedDatas.results.find(
        video.site === "YouTube" &&
          (video.type === "Trailer" || video.type === "Teaser"),
      );
      if (!firstMatchingVideo || firstMatchingVideo.length === 0) {
        setGotVideo(false);
      }
    }
  }

  if (isLoading) {
    setIsLoadingVideo(isLoading);
  }

  if (error) {
    setGotVideo(true);
  }

  if (loadedDatas && loadedDatas.results) {
    const firstMatchingVideo = loadedDatas.results.find(
      video.site === "YouTube" &&
        (video.type === "Trailer" || video.type === "Teaser"),
    );
    setCurrentKey(firstMatchingVideo.key);
  }

  return {
    currentKey,
    isLoadingVideo,
    gotVideo,
  };
}
