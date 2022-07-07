import { Box, Button, Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../context/productsContext";
import Loader from "../Loader/Loader";
import Video from "../../components/images/watch-edit.mp4";

const Details = () => {
  const { oneWatch, oneProduct } = useContext(productsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    oneWatch(id);
  }, []);
  return oneProduct ? (
    <Container style={{ marginTop: "40px" }}>
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
          opacity: "90%",
        }}>
        <source src={Video} type="video/mp4" />
      </video>
      <Box display={"flex"} alignItems={"center"}>
        <img
          style={{ borderRadius: "20%" }}
          src={oneProduct.image}
          width="40%"
          alt="product"
        />
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          textAlign={"center"}
          background-color={"black"}
          style={{
            background: "white",
            borderRadius: "30px",
            opacity: "90%",
            margin: "10px",
            padding: "50px",
          }}>
          <h4>{oneProduct.name}</h4>
          <h5>{oneProduct.description}</h5>
          <h4>Price: {oneProduct.price}$</h4>
          <Button
            onClick={() => navigate("/payment")}
            style={{ color: "black" }}>
            BUY NOW
          </Button>
        </Box>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default Details;
