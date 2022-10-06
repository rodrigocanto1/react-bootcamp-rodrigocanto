import * as React from "react";
import { NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function Appbar() {
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" color="inherit">
            <Badge color="error">
              <NavLink to="/">
                <HomeSharpIcon />
              </NavLink>
            </Badge>
          </IconButton>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={movies?.map((movie) => movie.title)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />

          <IconButton
            size="large"
            edge="start"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <NavLink to="/cart">
                <ShoppingCartIcon />
              </NavLink>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
