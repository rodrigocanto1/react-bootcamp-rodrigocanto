import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useParams } from "react-router-dom";
import { useGetMovie } from "../Hooks/useGetMovie";

const Bodymovie = () => {
  const { id } = useParams();

  const { movie } = useGetMovie(id);
  const { addItemToCart } = useContext(CartContext);

  return movie?.map((movie) => (
    <Card key={movie.id} sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        avatar={<Avatar alt={movie.title} src={movie.img} />}
        title={movie.title}
        subheader={movie.genres}
      />
      {<CardMedia component="img" height="140" image={movie.img} />}
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
        Add to cart
      </Button>
    </Card>
  ));
};

export default Bodymovie;
