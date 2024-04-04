import { useContext } from "react";
import useHttp from "./hooks/useHttp";

import MovieContext from "../store/MovieContext";

export default function MovieList() {
  const AppCtx = useContext(MovieContext);
  console.log(AppCtx.linkTrending);
  const dataRequest = useHttp(AppCtx.linkTrending, requestConfig, []);
  console.log(dataRequest.data.results);

  return (
    <div>
      <div>Movie List</div>
    </div>
  );
}
