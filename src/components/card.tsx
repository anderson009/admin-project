import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { padding } from "@mui/system";

interface Props {
  img?: string;
  name: string;
  price: number;
  amount: number;
  el: any;
  func: (a?: any) => void;
}

export default function OutlinedCard(props: Props) {
  const { img, name, price, amount, el, func } = props;
  return (
    <Box sx={{ width: "100%" }}>
      <Card
        onClick={() => func(el)}
        variant="outlined"
        className="!rounded-xl !w-full !pt-11 hover:bg-slate-100 !h-60  !flex !flex-col justify-center !items-center !text-center !relative cursor-pointer"
      >
        <CardMedia
          className="!w-32 !h-20"
          component="img"
          image={!img ? "../../public/search-fail.svg" : img}
          alt="Paella dish"
        />

        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ${price}
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {amount} Disponibles
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
