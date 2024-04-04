import { useContext } from "react";

import "./SubjectList.css";

import MovieList from "./MovieList";

import MovieContext from "../store/MovieContext";

export default function ObjectsList() {
  const movieCxt = useContext(MovieContext);
  return (
    <ul className="object-list-container">
      <h2>Subject</h2>
      {movieCxt.subjectList.map((subject) => {
        return (
          <MovieList key={subject.id} name={subject.name} link={subject.link} />
        );
      })}
    </ul>
  );
}
