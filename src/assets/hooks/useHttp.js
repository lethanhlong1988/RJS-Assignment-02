import { useState, useCallback, useEffect } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return resData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, config);
        setData(resData);
      } catch (error) {
        setError("Something went wrong!");
      }

      setIsLoading(false);
    },
    [url, config],
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return {
    data,
    isLoading,
    error,
  };
}
