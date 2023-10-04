import React from "react";
import {
  ListItemButton,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";

import { getLetters } from "../../utils/getLetters";
import { LoadingAvatar } from "../LoadingAvatar";

type Props = {
  name: string;
  email: string;
  selected?: boolean;
  loading?: boolean;
};

export const UserListItem: React.FC<Props> = (props) => {
  return (
    <ListItemButton
      alignItems="flex-start"
      selected={props.selected}
      disabled={props.loading}
    >
      <ListItemAvatar>
        {props.loading ? (
          <LoadingAvatar />
        ) : (
          <Avatar alt={props.name} sx={{ bgcolor: blueGrey[500] }}>
            {getLetters(props.name)}
          </Avatar>
        )}
      </ListItemAvatar>
      <ListItemText primary={props.name} secondary={props.email} />
    </ListItemButton>
  );
};

type ListProps = {
  children: React.ReactNode;
  maxWidth?: number;
};

export const UserList: React.FC<ListProps> = ({ maxWidth = 360, children }) => {
  return (
    <List
      sx={{ width: "100%", maxWidth: maxWidth, bgcolor: "background.paper" }}
    >
      {children}
    </List>
  );
};
