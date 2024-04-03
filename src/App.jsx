import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./pages/search/Search";
import Browse from "./pages/browse/Browse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
