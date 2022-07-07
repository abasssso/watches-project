import { Button, IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { productsContext } from "../../context/productsContext";
import { cartContext } from "../../context/cartContext";
import ClearIcon from "@mui/icons-material/Clear";

export default function WatchCard({ item }) {
  const navigate = useNavigate();
  const { deleteWatch } = React.useContext(productsContext);
  const { addToCart, checkProductInCart } = React.useContext(cartContext);
  const [productState, setProductState] = React.useState(
    checkProductInCart(item.id)
  );
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

          <Tooltip title="Add to Favourites">
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip>
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
