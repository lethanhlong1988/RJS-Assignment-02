import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./pages/search/Search";
import Browse from "./pages/browse/Browse";

import { MovieContextProvider } from "./store/MovieContext";
import { SelectedMovieContextProvider } from "./store/SelectedMovieContext";

function App() {
  return (
    <SelectedMovieContextProvider>
      <MovieContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </MovieContextProvider>
    </SelectedMovieContextProvider>
  );
}

export default App;
