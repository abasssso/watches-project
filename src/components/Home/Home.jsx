import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Watch from "../images/watch.mp4";

const Home = () => {
  return (
    <Container>
      <Box display={"flex"} justifyContent={"center"}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate( -50%, -50%)",
            zIndex: "-1",
          }}>
          <source src={Watch} type="video/mp4" />
        </video>
        <h1
          style={{
            color: "white",
            marginTop: "200px",
            textAlign: "center",
            fontSize: "90px",
          }}>
          THE CHAMPIONSHIPS,
          <br /> WIMBLEDONE
        </h1>
      </Box>
    </Container>
  );
};

export default Home;
