import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Cart from "./containers/Cart";
import Movie from "./containers/Movie";
import NotFound from "./containers/NotFound";
import Appbar from "./components/Appbar";

function App() {
  return (
    <BrowserRouter>
      <Appbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/id" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
