import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useRef } from "react";
import Watch from "../images/watch.mp4";
import Video1 from "../images/video1.mp4";
import Video2 from "../images/video2.mp4";
import Video3 from "../images/video3.mp4";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Box display={"flex"} justifyContent={"center"}>
        <video
          className="video.home"
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
          // className="text2"
          style={{
            color: "white",
            marginTop: "100px",
            textAlign: "center",
            fontSize: "90px",
          }}>
          THE CHAMPIONSHIPS,
          <br /> WIMBLEDONE
        </h1>
      </Box>
      <Box
        className={"videos"}
        display={"flex"}
        justifyContent={"space-evenly"}>
        <video
          autoPlay
          loop
          muted
          style={{ width: "200px", borderRadius: "100%" }}>
          <source src={Video1} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          style={{ width: "200px", borderRadius: "100%" }}>
          <source src={Video2} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          style={{ width: "200px", borderRadius: "100%" }}>
          <source src={Video3} type="video/mp4" />
        </video>
      </Box>
      <Box
        className={"text1"}
        style={{
          marginTop: "200px",
          // width: "1140px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <h1
          style={{
            fontSize: "2.5rem",
            lineHeight: "1.5",
            textAlign: "center",
          }}>
          Rolex watches are crafted with scrupulous attention to detail.
        </h1>
        <p style={{ textAlign: "center" }}>
          Explore the Rolex collection of prestigious, high-precision
          timepieces. Rolex offers a wide assortment of Classic and Professional
          watch models to suit any wrist. Discover the broad selection of Rolex
          watches to find a perfect combination of style and functionality.
        </p>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
        }}>
        <Button onClick={() => navigate("/products")} variant="filled">
          Buy Now
        </Button>
        <Button onClick={() => navigate("/add")} variant="filled">
          Add watch
        </Button>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}>
        <h2>ROLEX WATCHES</h2>
        <Carousel
          className="slider"
          style={{ width: "800px" }}
          variant="dark"
          interval={"1200"}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m124060-0001.png?imwidth=840"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>SUBMARINER</h3>
              <p>THE REFERENCE AMONG DIVERS' WATCHES</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m124273-0001.png?imwidth=840"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>EXPLORER</h3>
              <p>THE CALL OF THE PEAKS</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m226570-0001.png?imwidth=840"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>AIR KING</h3>
              <p>A HOMAGE TO AVIATION</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Button onClick={() => navigate("/products")} variant="filled">
          View More
        </Button>
      </Box>
    </div>
  );
};

export default Home;
