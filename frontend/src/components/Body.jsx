import * as React from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Body() {
  const url = "http://localhost:3200/movies/";
  const [movies, setMovies] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovies(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Box m={2} sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 10 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {movies?.map((movie) => (
          <Grid item xs={2} sm={4} md={4} key={movie.id}>
            <CardActionArea>
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
