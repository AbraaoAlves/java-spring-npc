import React from "react";
import {
  Button,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Grid,
} from "@mui/material";

type Props = {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
  updateAt?: string;
};

export const UserCard: React.FC<Props> = (props) => {
  return (
    <Card>
      <Grid container>
        <Grid item>
          <CardMedia component="img" height={180} src={fakeImgPrefix(props)} />
        </Grid>
        <Grid item xs>
          <CardContent >
            <Typography variant="h5">{props.name}</Typography>
            <Typography variant="body1" color="text.secondary" component="div" gutterBottom>
              {props.email}
            </Typography>

            <Divider variant="fullWidth" />


            <Typography variant="body2" color="text.secondary">
              Criado em: {props.createdAt ?? ""}
            </Typography>

            <Typography variant="body2" color="text.secondary" >
              Atualizado em: {props.updateAt ?? ""}
            </Typography>

          </CardContent>
          <CardActions >
            <Button size="small" color="primary">
              Editar
            </Button>
            <Button size="small" variant="outlined" color="secondary">
              Deletar
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

const fakeImgPrefix = ({ name }: Props) => {
  const firstName = name.split(" ")[0] ?? "";
  const lastLetter = firstName[firstName.length - 1];
  const icon =
    {
      a: "👩‍💻",
      o: "👨‍💻",
    }[lastLetter] || "🤖";

  return `https://fakeimg.pl/800x600/f6f3fa,128/000/?text=${firstName}%20%20${icon}`;
};
