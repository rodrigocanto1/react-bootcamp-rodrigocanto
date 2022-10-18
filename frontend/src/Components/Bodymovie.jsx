import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useParams } from "react-router-dom";
import { useGetMovie } from "../Hooks/useGetMovie";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Stack } from "@mui/system";

const Bodymovie = () => {
  const { id } = useParams();

  const { movie } = useGetMovie(id);
  const { addItemToCart } = useContext(CartContext);

  return movie?.map((movie) => (
   
   <Stack alignItems={'center'} justifyContent={'center'}>
   <Card key={movie.id} sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia component="img" height="380" image={movie.img} />
      <CardHeader title={movie.title} subheader={movie.genres} />
      <CardContent>
        {
          <Typography variant="body2" color="text.secondary" component="p">
            {movie.description}
          </Typography>
        }
      </CardContent>
      <Button
        onClick={() => addItemToCart(movie)}
        variant="contained"
        size="small"
      >
        <ShoppingCartIcon />
        Add to cart
      </Button>
    </Card>
    </Stack>
  ));
};

export default Bodymovie;
