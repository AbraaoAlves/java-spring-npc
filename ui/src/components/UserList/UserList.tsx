import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { blueGrey } from '@mui/material/colors';
import { getLetters } from '../../utils/getLetters';


type Props = {
  name: string;
  email: string;
}

export const UserListItem: React.FC<Props> = (props) => {
  return  <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.name} sx={{ bgcolor: blueGrey[500] }}>{getLetters(props.name)}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={props.email}/>
    </ListItem>
}
