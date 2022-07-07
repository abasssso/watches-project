import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../context/productsContext";
import Video from "../images/driving.mp4";

const Add = () => {
  const navigate = useNavigate();
  const { createWatch } = useContext(productsContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  function handleSave() {
    const newWatch = {
      name,
      description,
      price,
      image,
    };
    if (!name.trim() || !description.trim() || !price || !image.trim()) {
      alert("type in");
    } else {
      createWatch(newWatch);
      navigate("/products");
    }
  }
  return (
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
        <h2 color="white">ADD PRODUCT</h2>
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
          value={+price}
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
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default Add;
