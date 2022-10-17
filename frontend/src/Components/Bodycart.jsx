import React, { useEffect,useContext, useState, } from "react";
import { CartContext } from "../Context/CartContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Bodycart = () => {
  const { deleteItemToCart } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const [productsLenght, setProductsLenght] = useState(0);

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
      {productsLenght === 0 ? (
        <Stack mb={2} justifyContent={"center"} alignItems={"center"}>
          <Typography color={"blue"} variant="h4" component="h1">
            Your cart its empty
          </Typography>
        </Stack>
      ) : (
        <div>
          <Stack mb={2} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="h4" component="h1">
              Your cart
            </Typography>
          </Stack>
          {cartItems.map((item, i) => (
            <Box key={item.id} sx={{ flexGrow: 1 }}>
              <Grid
                container
                mb={3}
                direction={"row"}
                justifyContent={"space-around"}
                alignItems={"center"}
                spacing={{ xs: "0.5", md: "5" }}
                columns={{ xs: 1, sm: 8, md: 12 }}
              >
                <Typography variant="h9" component="p">
                  Product: {item.title}
                </Typography>
                <Typography variant="h8" component="p">
                  Price ${item.price}
                </Typography>
                <Stack alignItems={"center"} justifyContent={"center"}>
                  <Button
                    onClick={() => deleteItemToCart(item.id)}
                    variant="outlined"
                    size="small"
                    startIcon={<DeleteIcon />}
                  >
                    <Typography variant="h9" component="p">
                      Delete
                    </Typography>
                  </Button>
                </Stack>
              </Grid>
            </Box>
          ))}
          <Stack alignItems={"center"}>
            <Grid item xs={2} sm={4} md={4}>
              <Typography variant="h5" component="h4">
                Total ${total}
              </Typography>
            </Grid>
            <Stack spacing={2} sx={{ width: "10%" }}>
              <Button variant="outlined" onClick={handleClick}>
                Buy
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Thank you!
                </Alert>
              </Snackbar>
            </Stack>
          </Stack>
        </div>
      )}
    </div>
  );
};

export default Bodycart;
