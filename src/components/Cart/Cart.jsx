import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/system";
import Loader from "../Loader/Loader";
import InfoIcon from "@mui/icons-material/Info";
import { Button, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Video from "../images/apple-watch.mp4";

export default function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCount } =
    React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  return cart ? (
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
      <TableContainer style={{ opacity: "70%" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">Subprice</TableCell>
              <TableCell align="right">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map(row => (
              <TableRow
                key={row.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.item.name}
                </TableCell>
                <TableCell>
                  <img
                    style={{
                      maxWidth: "100px",
                      marginLeft: "20px",
                      borderRadius: "20px",
                    }}
                    src={row.item.image}
                  />
                </TableCell>
                <TableCell align="right">{row.item.price}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => changeCount(row.count + 1, row.item.id)}>
                    <AddIcon />
                  </IconButton>{" "}
                  {row.count}
                  <IconButton
                    onClick={() => changeCount(row.count - 1, row.item.id)}>
                    <RemoveIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">{row.subPrice}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => deleteFromCart(row.item.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => navigate(`/details/${row.item.id}`)}>
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display={"flex"}
        justifyContent={"center"}
        marginTop={"20px"}
        alignItems={"center"}
        flexDirection={"column"}>
        <Typography style={{ color: "white" }} variant="h4">
          Total:{cart.totalPrice} $
        </Typography>
        <Button onClick={() => navigate("/payment")} color="success">
          Order
        </Button>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
}
