import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import "./Banner.css";

import Button from "./UI/Button";
import { requests } from "../store/apiKey";

export default function Banner() {
  const [loadbannerData, setLoadBannerData] = useState([]);
  const bannerLink = `https://api.themoviedb.org/3${requests.fetchTrending}`;

  useEffect(() => {
    async function fetchBanner() {
      const response = await fetch(bannerLink);
      if (!response.ok) {
        console.log("Not get Data!!!");
      }
      const bannerData = await response.json();
      const bannerMovie =
        bannerData.results[
          Math.floor(Math.random() * bannerData.results.length - 1)
        ];
      console.log(bannerMovie);
      setLoadBannerData(bannerMovie);
    }
    fetchBanner();
  }, []);

  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500${loadbannerData.backdrop_path}')`,
      }}
    >
      <Navbar />
      <div className="my-content">
        <div>
          <h1>{loadbannerData.name || loadbannerData.title}</h1>
        </div>
        <div className="action-bar">
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <div>
          <p>{loadbannerData.overview}</p>
        </div>
      </div>
    </div>
  );
}
