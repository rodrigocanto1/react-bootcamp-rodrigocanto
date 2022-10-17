import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useGetMovies } from "../Hooks/useGetMovies";
import { useNavigate } from "react-router-dom";

export default function Appbar() {
  const { movies } = useGetMovies();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" size="large" color="inherit">
            <Badge color="error">
              <NavLink to="/">
                <HomeSharpIcon />
              </NavLink>
            </Badge>
          </IconButton>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={movies}
            getOptionLabel={(option) => option.title}
            onChange={(event, value) => navigate(`/movie/${value.id}`)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
          <IconButton size="large" color="inherit">
            <NavLink to="/cart">
              <ShoppingCartIcon />
            </NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
