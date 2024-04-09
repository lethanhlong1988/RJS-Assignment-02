import { useContext } from "react";

import "./Browse.css";

import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import MovieDetail from "../../components/MovieDetail";
import SubjectList from "../../components/SubjectList";

import SelectedMovieContext from "../../store/SelectedMovieContext";

export default function Browse() {
  const selectedMovieCtx = useContext(SelectedMovieContext);

  return (
    <div className="app">
      <div className="app-content">
        <h1>Browse</h1>
        <Navbar />
        <Banner />
        {selectedMovieCtx.viewOn && <MovieDetail />}
        <SubjectList />
      </div>
    </div>
  );
}
