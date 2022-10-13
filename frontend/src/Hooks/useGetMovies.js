import { useState, useEffect } from "react";

export const useGetMovies = () => {
  const [movies, setMovies] = useState();
  const url = `http://localhost:3200/movies`;
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovies(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return { movies };
};
