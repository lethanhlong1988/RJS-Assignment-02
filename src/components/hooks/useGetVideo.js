import { useState, useCallback, useEffect } from "react";
import useHttp from "./useHttp";

export default function useGetVideo(url, config, initialData) {
  const [data, setData] = useState(initialData);

  const {
    data: loadedData,
    isLoading,
    error,
  } = useHttp(url, config, initialData);

  return {
    data,
    isLoading,
    error,
  };
}
