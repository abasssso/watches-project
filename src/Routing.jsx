import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Add/Add";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Favourites from "./components/Favourites/Favourites";
import Home from "./components/Home/Home";
import Payment from "./components/Payment/Payment";
import ProductsList from "./components/ProductsList/ProductsList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default Routing;
