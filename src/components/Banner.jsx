import { useEffect } from "react";
import useHttp from "./hooks/useHttp";
import "./Banner.css";

import Button from "./UI/Button";
import { requests } from "../store/apiKey";

export default function Banner() {
  const bannerLink = `https://api.themoviedb.org/3${requests.fetchTrending}`;
  console.log(bannerLink);
  useEffect(() => {
    const { data: bannerData, loading, rerror } = useHttp(bannerLink, {}, []);

    if (loading) {
      return <p>Fetching Movies ...</p>;
    }

    if (rerror) {
      return <p>Something went wrong ...</p>;
    }
    const bannerMovieList = bannerData.data.results;
    if (!bannerMovieList || bannerMovieList.length === 0) {
      return <p>No movies found!!!</p>;
    }
  }, []);

  return (
    <div className="my-content">
      <div>
        <h1>Name</h1>
      </div>
      <div className="action-bar">
        <Button>Play</Button>
        <Button>My List</Button>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a
          sint excepturi ab, laudantium dolore.
        </p>
      </div>
    </div>
  );
}
