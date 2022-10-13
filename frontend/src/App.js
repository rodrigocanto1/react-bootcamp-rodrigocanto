import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home";
import Cart from "./Containers/Cart";
import Movie from "./Containers/Movie";
import NotFound from "./Containers/NotFound";
import Appbar from "./Components/Appbar";

function App() {
  return (
    <BrowserRouter>
      <Appbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
