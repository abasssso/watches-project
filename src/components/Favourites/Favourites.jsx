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
import { useNavigate } from "react-router-dom";
import { favouriteContext } from "../../context/favouriteContext";
import Video from "../images/rolex.mp4";

export default function Favorites() {
  const navigate = useNavigate();
  const { getFav, fav, deleteFromFav } = React.useContext(favouriteContext);
  React.useEffect(() => {
    getFav();
  }, []);
  return fav ? (
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
              <TableCell align="center">Product</TableCell>
              <TableCell align="center">Photo</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Subprice</TableCell>
              <TableCell align="center">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fav.products.map(row => (
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
                {/* <TableCell align="right">
                  <IconButton
                    onClick={() => changeCount(row.count + 1, row.item.id)}>
                    <AddIcon />
                  </IconButton>{" "}
                  {row.count}
                  <IconButton
                    onClick={() => changeCount(row.count - 1, row.item.id)}>
                    <RemoveIcon />
                  </IconButton>
                </TableCell> */}
                <TableCell align="right">{row.subPrice}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => deleteFromFav(row.item.id)}>
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
    </Container>
  ) : (
    <Loader />
  );
}
