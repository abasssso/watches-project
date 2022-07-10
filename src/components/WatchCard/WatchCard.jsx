import { Button, IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useContext, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { productsContext } from "../../context/productsContext";
import { cartContext } from "../../context/cartContext";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { favouriteContext } from "../../context/favouriteContext";

export default function WatchCard({ item }) {
  const navigate = useNavigate();
  const { deleteWatch } = React.useContext(productsContext);
  const { addToCart, checkProductInCart } = React.useContext(cartContext);
  const { addToFav, checkProductInFav } = React.useContext(favouriteContext);
  const [productState, setProductState] = React.useState(
    checkProductInCart(item.id)
  );
  const [favState, setFavState] = React.useState(checkProductInFav(item.id));
  return (
    <CardGroup
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}>
      <Card style={{ maxWidth: "300px", margin: "10px", flexWrap: "wrap" }}>
        <Card.Img
          style={{ maxWidth: "300px" }}
          variant="top"
          src={item.image}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}>
          <small className="text-muted">{item.price}$</small>
          <Tooltip title="Edit">
            <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Info">
            <IconButton onClick={() => navigate(`/details/${item.id}`)}>
              <InfoIcon />
            </IconButton>
          </Tooltip>

          <IconButton
            onClick={() => {
              addToCart(item);
              setProductState(checkProductInCart(item.id));
            }}>
            {productState ? (
              <Tooltip title="Delete Watch">
                <ClearIcon />
              </Tooltip>
            ) : (
              <Tooltip title="Add Watch">
                <AddIcon />
              </Tooltip>
            )}
            {/* <AddIcon color={productState ? "secondary" : "primary"} /> */}
          </IconButton>

          <IconButton
            onClick={() => {
              addToFav(item);
              setFavState(checkProductInFav(item.id));
            }}>
            {favState ? (
              <Tooltip title="Remove from Favourite">
                <FavoriteIcon />
              </Tooltip>
            ) : (
              <Tooltip title="Add to Favourite">
                <FavoriteBorderIcon />
              </Tooltip>
            )}
          </IconButton>

          <Tooltip title="Delete">
            <IconButton onClick={() => deleteWatch(item.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}
