import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <Container>
      {/* <div backgroundColor="white" height={"100px"} width={"100vw"}>
        nfew j.wekl
      </div> */}
      <Box
        color={"white"}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"flex-end"}
        marginTop={"20px"}>
        <p>Izbrannoe</p>
        <p>Poisk</p>
        <img style={{ width: "200px" }} src={Logo} alt="" />
        <p>Korzina</p>
        <p>Kccount</p>
      </Box>
    </Container>
  );
};

export default Header;
