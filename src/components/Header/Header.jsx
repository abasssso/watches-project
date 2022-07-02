import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Logo from "../images/logo.png";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
        <p style={{ display: "flex", alignItems: "center" }}>
          <StarBorderIcon style={{ width: "50px" }} />
          Your selection
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <SearchIcon style={{ width: "50px" }} /> Search
        </p>
        <img style={{ width: "200px" }} src={Logo} alt="" />
        <p style={{ display: "flex", alignItems: "center" }}>
          <ShoppingCartIcon style={{ width: "50px" }} /> Cart
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <AccountCircleIcon style={{ width: "50px" }} /> Account
        </p>
      </Box>
    </Container>
  );
};

export default Header;
