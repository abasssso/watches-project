import { Box, Container, Pagination, Slider, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../context/productsContext";
import Video from "../images/WatchWall.mp4";
import WatchCard from "../WatchCard/WatchCard";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { products, getWatch, pages } = useContext(productsContext);
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );
  const [price, setPrice] = useState([1000, 1000000]);
  useEffect(() => {
    getWatch();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 4,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);
  useEffect(() => {
    getWatch();
  }, [searchParams]);
  return (
    <Container>
      <Box>
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
            opacity: "95%",
            brightness: "50%",
            opacity: "90%",
          }}>
          <source src={Video} type="video/mp4" />
        </video>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <h1
          style={{
            color: "white",
            marginTop: "200px",
            textAlign: "center",
            fontSize: "90px",
          }}>
          A. D. WATCHES
        </h1>
        <p style={{ color: "white" }}>THE COLLECTION</p>
      </Box>
      <Box
        style={{
          marginTop: "400px",
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
          Explore the Rolex collection of prestigious, high-precision
          timepieces.
        </h1>
        <p style={{ textAlign: "center" }}>
          Rolex offers a wide assortment of Oyster Perpetual and Cellini watches
          to suit any wrist. Discover the broad selection of Rolex watches to
          find a perfect combination of style and functionality.
        </p>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        margin={"10px"}
        alignItems={"center"}>
        <TextField
          placeholder="Search"
          onChange={e => setSearch(e.target.value)}
          value={search}
          variant="filled"
        />
        <Slider
          getAriaLabel={() => "Price range"}
          value={price}
          onChange={(e, value) => {
            console.log(value);
            setPrice(value);
          }}
          style={{ maxWidth: "400px", marginLeft: "50px" }}
          valueLabelDisplay="auto"
          min={0}
          max={1000000}
          step={10000}
        />
      </Box>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map(item => (
          <WatchCard key={item.id} item={item} />
        ))}
      </div>
      <Pagination
        onChange={(event, page) => {
          setCurrentPage(page);
        }}
        style={{ margin: "10px" }}
        page={currentPage}
        count={pages}
      />
    </Container>
  );
};

export default ProductsList;
