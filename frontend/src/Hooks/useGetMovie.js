import { useState, useEffect } from "react";

export const useGetMovie = (id) => {
  const [movie, setMovie] = useState();
  const url = `http://localhost:3200/movies/${id}`;
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovie(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return { movie };
};
