import React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = { 
  id:string;
  name:string;
  email:string;
  createdAt?: string;
  updateAt?: string;
}

const fakeImgPrefix = ({ name }:Props) =>
  `https://fakeimg.pl/800x600/f6f3fa,128/000/?text=${name.split(" ")[0] ?? ''}%20%20🧑‍💻`;

export const UserCard: React.FC<Props> = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={140}
          src={fakeImgPrefix(props)}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.email}
          </Typography>
          
          <Typography variant="overline" color="text.secondary">
            Criado em: {props.createdAt ?? ''} 
            Atualizado em: {props.updateAt ?? ''} 
          </Typography>
          
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Edit
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
