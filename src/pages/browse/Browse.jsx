import useHttp from "../../components/hooks/useHttp";

import "./Browse.css";

import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import MovieDetail from "../../components/MovieDetail";
import SubjectList from "../../components/SubjectList";

export default function Browse() {
  return (
    <div className="app">
      <h1>Browse</h1>
      <Navbar />
      <Banner />
      {/* <MovieDetail /> */}
      <SubjectList />
    </div>
  );
}
