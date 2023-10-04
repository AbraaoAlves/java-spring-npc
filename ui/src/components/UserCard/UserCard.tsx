import React from "react";
import {
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
  children: React.ReactNode; 
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


            <i>
              Criado em: {props.createdAt ?? ""}
            </i>

            <i>
              Atualizado em: {props.updateAt ?? ""}
            </i>

          </CardContent>
          <CardActions>
            {props.children}

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
