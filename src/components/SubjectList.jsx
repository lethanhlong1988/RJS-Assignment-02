import { useContext } from "react";

import "./SubjectList.css";

import MovieContext from "../store/MovieContext";

export default function ObjectsList() {
  const movieCxt = useContext(MovieContext);
  console.log(movieCxt.objectList);
  return (
    <div className="object-list-container">
      <div>Object</div>
      {movieCxt.objectList.map((object) => {
        return <div>Object</div>;
      })}
    </div>
  );
}
