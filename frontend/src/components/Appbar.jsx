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
import { CartContext } from "../Context/CartContext";
import { useState, useContext, useEffect } from "react";

export default function Appbar() {
  const { movies } = useGetMovies();
  const [productsLenght, setProductsLenght] = useState(0);
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    setProductsLenght(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

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
          <IconButton size="large" aria-label={productsLenght} color="inherit">
            <Badge badgeContent={productsLenght} color="error">
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
