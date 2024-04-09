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
  const [currentKey, setCurrentKey] = useState(null);

  const sendRequest = useCallback(async () => {
    setIsLoading(true);
    try {
      const resData = await sendHttpRequest(url, config);
      setLoadedDatas(resData);
    } catch (error) {
      setError("Something went wrong!");
    }
    setIsLoading(false);
  }, [url, config]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest, url]);

  useEffect(() => {
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
        setCurrentKey(firstMatchingVideo.key);
      }
    }
  }, [loadedDatas]);

  return {
    currentKey,
    isLoading,
    error,
  };
}
