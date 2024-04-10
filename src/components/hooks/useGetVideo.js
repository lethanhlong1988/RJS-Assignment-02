import { useState, useEffect, useCallback } from "react";

export default function useGetVideo(url, config, initialData) {
  const [loadedDatas, setLoadedDatas] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [gotKey, setGotKey] = useState(null);

  const sendRequest = useCallback(async () => {
    setGotKey(null);
    setError(false);
    setIsLoading(true);
    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        setError(true);
        console.log(error);
      } else {
        const resData = await response.json();
        setLoadedDatas(resData);
        const hasVideos =
          resData.results &&
          resData.results.some(
            (video) =>
              video.site === "YouTube" &&
              (video.type === "Trailer" || video.type === "Teaser"),
          );

        if (hasVideos) {
          const firstMatchingVideo = resData.results.find(
            (video) =>
              video.site === "YouTube" &&
              (video.type === "Trailer" || video.type === "Teaser"),
          );
          setGotKey(firstMatchingVideo.key);
          console.log(gotKey);
        }
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return {
    gotKey,
    isLoading,
    error,
  };
}
