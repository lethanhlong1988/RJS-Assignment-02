import { useState, useEffect, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return resData;
}

export default function useGetVideo(url, config, initialData) {
  const [loadedDatas, setLoadedDatas] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [gotKey, setGotKey] = useState(null);

  const sendRequest = useCallback(async () => {
    setIsLoading(true);
    try {
      const resData = await sendHttpRequest(url, config);
      setLoadedDatas(resData);
    } catch (error) {
      setError("Something went wrong!");
    }

    if (loadedDatas) {
      const hasVideos =
        loadedDatas.results &&
        loadedDatas.results.some(
          (video) =>
            video.site === "YouTube" &&
            (video.type === "Trailer" || video.type === "Teaser"),
        );

      if (hasVideos) {
        const firstMatchingVideo = loadedDatas.results.find(
          (video) =>
            video.site === "YouTube" &&
            (video.type === "Trailer" || video.type === "Teaser"),
        );
        setGotKey(firstMatchingVideo.key);
      }
    }
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  // useEffect(() => {
  //   if (loadedDatas) {
  //     const hasVideos =
  //       loadedDatas.results &&
  //       loadedDatas.results.some(
  //         (video) =>
  //           video.site === "YouTube" &&
  //           (video.type === "Trailer" || video.type === "Teaser"),
  //       );

  //     if (hasVideos) {
  //       const firstMatchingVideo = loadedDatas.results.find(
  //         (video) =>
  //           video.site === "YouTube" &&
  //           (video.type === "Trailer" || video.type === "Teaser"),
  //       );
  //       setCurrentKey(firstMatchingVideo.key);
  //     }
  //   }
  // }, [loadedDatas]);

  return {
    gotKey,
    isLoading,
    error,
  };
}
