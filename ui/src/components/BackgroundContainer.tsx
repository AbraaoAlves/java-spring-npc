import { styled } from "@mui/material";

type BGProps = {
  imgUrl: string;
  imgOpacity: number;
  height: string | number;

};

export const BackGroundContainer = styled("div")<BGProps>(
  ({ imgUrl, imgOpacity, height, sx }) => ({
    height: height,
    sx,
    "&::before": {
      minHeight: "100%",
      backgroundImage: 'url("' + imgUrl + '")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    //   filter: "alpha(opacity=50)",
      opacity: imgOpacity,
      
      zIndex: 1,
      position: "absolute",
      content: '""',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      
    },
    '& *' : {
        zIndex:2
    }
  })
);
