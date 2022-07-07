import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../context/productsContext";
import Video from "../images/driving.mp4";
import Loader from "../Loader/Loader";

const Edit = () => {
  const navigate = useNavigate();
  const { oneWatch, updateWatch, oneProduct } = useContext(productsContext);
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    oneWatch(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setName(oneProduct.name);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  function handleSave() {
    const editedWatch = {
      name,
      description,
      price,
      image,
    };
    // console.log(editedWatch);
    updateWatch(id, editedWatch);

    navigate("/products");
  }
  return oneProduct ? (
    <Container>
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
        <source src={Video} type="video/mp4" />
      </video>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        marginTop={"50px"}>
        <h2 color="white">EDIT PRODUCT</h2>
        <TextField
          value={name}
          variant="filled"
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        />
        <TextField
          value={description}
          variant="filled"
          type="text"
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
        />
        <TextField
          value={price}
          variant="filled"
          type="number"
          onChange={e => setPrice(+e.target.value)}
          placeholder="Price"
        />
        <TextField
          value={image}
          variant="filled"
          type="text"
          placeholder="Image"
          onChange={e => setImage(e.target.value)}
        />

        <Button variant="filled" onClick={handleSave}>
          Update
        </Button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default Edit;
