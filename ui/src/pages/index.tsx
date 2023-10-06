import { Typography } from "@mui/material";
import imgUrl from "../assets/pexels-photo-583847.jpeg";
import { BackGroundContainer } from "../components/BackgroundContainer";

export default function Index() {
  return (
    <BackGroundContainer
      imgUrl={imgUrl}
      imgOpacity={.2}
      height="90vh"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Typography variant="h3">GESTÃO DE USUÁRIOS</Typography>

      <Typography variant="body1">
        Veja nosso codigo em{" "}
        <a href="https://github.com/AbraaoAlves/java-spring-npc/">
          npc project
        </a>
      </Typography>
    </BackGroundContainer>
  );
}
