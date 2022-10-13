import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../Context/CartContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";

const Bodycart = ({ item }) => {
  const { deleteItemToCart } = useContext(CartContext);
  const [productsLenght, setProductsLenght] = useState(0);
  const id = { item };
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductsLenght(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );

  return (
    <div>
      {cartItems.lenght === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <h2>Your cart</h2>
          {cartItems.map((item, i) => (
            <Box key={i} sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={4} md={4}>
                  Product: {item.title}
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  Price ${item.price}
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  Remove
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    onClick={() => deleteItemToCart(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                Total ${total}
              </Grid>
            </Box>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bodycart;
