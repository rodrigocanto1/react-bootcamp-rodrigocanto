import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate, useLocation } from "react-router-dom";
import { useGetMovies } from "../Hooks/useGetMovies";



export default function Body() {
  const {movies} = useGetMovies()
  const navigate = useNavigate();

  

  return (
    <Box m={2} sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 10 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {movies?.map((movie) => (
          <Grid item xs={2} sm={4} md={4} key={movie.id}>
            <CardActionArea onClick={() => navigate(`/movie/${movie.id}`)}>
              <CardMedia component="img" height="100" image={movie.img} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {movie.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
