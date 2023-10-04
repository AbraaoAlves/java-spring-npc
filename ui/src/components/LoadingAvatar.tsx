import React from "react";

import { Avatar } from "@mui/material";
import IconStage1 from "@mui/icons-material/HourglassTopOutlined";
import IconStage2 from "@mui/icons-material/HourglassFullOutlined";
import IconStage3 from "@mui/icons-material/HourglassBottomOutlined";
import IconStage4 from "@mui/icons-material/HourglassEmptyOutlined";

import { blueGrey } from "@mui/material/colors";

import './LoadingAvatar.css';

export const LoadingAvatar: React.FC = () => {
  return (
    <Avatar className="loading-avatar" alt="loading ..." sx={{ bgcolor: blueGrey[500] }}>
      <IconStage1 />
      <IconStage2 />
      <IconStage3 />
      <IconStage4 />
    </Avatar>
  );
};
