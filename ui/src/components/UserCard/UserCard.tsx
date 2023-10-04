import React from "react";
import {
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Grid,
  Box,
} from "@mui/material";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type Props = {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
  children: React.ReactNode;
};

export const UserCard: React.FC<Props> = (props) => {
  const createdAt = dayjs(props.createdAt ?? "").fromNow();
  const updatedAt = dayjs(props.updatedAt ?? "").fromNow();

  return (
    <Card sx={{maxWidth:'80%'}}>
      <Grid container >
        <Grid item md={6} xs={12}>
          <CardMedia component="img" height="100%"  src={fakeImgPrefix(props)} />
        </Grid>
        <Grid
          item
          xs
          sm
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Typography variant="h4">{props.name}</Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              component="div"
              gutterBottom
            >
              {props.email}
            </Typography>
          </CardContent>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
            <Box textAlign="end" sx={{ mr: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Created at <i>{createdAt}</i>
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Aupdated at <i>{updatedAt}</i>
              </Typography>
              <Divider variant="fullWidth" sx={{ marginTop: "5%" }} />
            </Box>

            <CardActions sx={{ justifyContent: "flex-end" }}>
              {props.children}
            </CardActions>
          </Box>
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
