import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useGetMovies } from "../Hooks/useGetMovies";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

export default function Body() {
  const { movies } = useGetMovies();
  const navigate = useNavigate();

  const [currentPage, setCurentPage] = useState(0);

  const filteredMovies = () => {
    return movies?.slice(currentPage, currentPage + 6);
  };

  const nextPage = () => {
    if (currentPage < 12) {
      setCurentPage(currentPage + 6);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurentPage(currentPage - 6);
    }
  };

  return (
    <Box m={2} sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 10 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filteredMovies()?.map((movie) => (
          <Grid item xs={4} sm={4} md={4} key={movie.id}>
            <CardActionArea onClick={() => navigate(`/movie/${movie.id}`)}>
              <CardMedia component="img" height="300" image={movie.img} />
              <CardHeader title={movie.title} subheader={movie.genres} />
              <CardContent>
                {
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="p"
                  >
                    {movie.description}
                  </Typography>
                }
              </CardContent>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
      <Stack alignItems={"center"} spacing={2}>
        <Pagination count={3} onClick={nextPage} />
      </Stack>
      <Stack spacing={2}></Stack>
    </Box>
  );
}
