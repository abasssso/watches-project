import { Box, Container } from "@mui/system";
import React from "react";
import Logo from "../images/logo.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, useNavigate } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import { cartContext } from "../../context/cartContext";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const { getCart, count } = React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <div
        className="header"
        // id="navbar"
        // height={"130px"}
      >
        <p
          onClick={() => navigate("/products")}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <StarBorderIcon style={{ width: "50px" }} />
          Watches
        </p>
        <p
          onClick={() => navigate("/favourites")}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <FavoriteIcon style={{ width: "50px" }} /> Favourites
        </p>
        <img
          onClick={() => navigate("/home")}
          style={{ width: "200px", cursor: "pointer" }}
          src={Logo}
          alt=""
        />
        <p
          onClick={() => navigate("/cart")}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <Badge badgeContent={count} color="error">
            <AddShoppingCartIcon style={{ width: "50px" }} />
          </Badge>{" "}
          Cart
        </p>
        <p
          onClick={() => navigate("/add")}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <AccountCircleIcon style={{ width: "50px" }} /> Add product
        </p>
      </div>
    </div>
  );
};

export default Header;
