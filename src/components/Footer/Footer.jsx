import { Box, Container } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => (
  <div>
    <Box className="footer">
      <p>A.D. WATCHES</p>
      <Box className="footer-box">
        <Box className="footer-collection">
          <h4 textAlign="center">Collection</h4>
          <ul
            style={{
              fontSize: "15px",
              listStyle: "none",
              paddingLeft: "0rem",
            }}>
            <li>Air-King</li>
            <li>
              Cosmograph <br /> Daytona
            </li>
            <li>Datejust</li>
            <li>Lady-Datejust</li>
            <li>Day-Date</li>
            <li>Explorer</li>
            <li>GMT-Master</li>
            <li>Milgauss</li>
            <li>Oyster Perpetual</li>
            <li>Sea-Dweller</li>
            <li>Sky-Dweller</li>
            <li>Submariner</li>
            <li>Yacht-Master</li>
            <li>Cellini</li>
          </ul>
        </Box>
        <Box>
          <h4>Watches</h4>
          <ul
            style={{
              fontSize: "15px",
              listStyle: "none",
              paddingLeft: "0rem",
            }}>
            <li>A.D. Watches</li>
            <li>Latest</li>
            <li>
              Watch <br /> configurator
            </li>
            <li>Watch search</li>
            <li>Men's watch</li>
            <li>Women`s watch</li>
            <li>
              History of <br /> the brand <br /> and <br /> watchmaking
            </li>
          </ul>
        </Box>
        <Box>
          <h4>Channels</h4>
          <ul
            style={{
              fontSize: "15px",
              listStyle: "none",
              paddingLeft: "0rem",
            }}>
            <li>
              <a href="https://www.facebook.com/rolex">
                <img
                  width={"18px"}
                  src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"
                  alt=""
                />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/accounts/login/?next=/rolex/">
                <img
                  width={"18px"}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                  alt=""
                />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/rolex">
                <img
                  width={"18px"}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
                  alt=""
                />
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/rolex">
                <img
                  width={"18px"}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                  alt=""
                />{" "}
                Youtube
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/rolex/">
                <img
                  width={"18px"}
                  src="https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png"
                  alt=""
                />{" "}
                Pinterest
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/rolex/">
                <img
                  width={"18px"}
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt=""
                />{" "}
                LinkedIn
              </a>
            </li>
          </ul>
        </Box>
        <Box>
          <h4>Services</h4>
          <ul
            style={{
              fontSize: "15px",
              listStyle: "none",
              paddingLeft: "0rem",
            }}>
            <li>Buy A.D. Watches</li>
            <li>Find a distributor</li>{" "}
            <li>
              Watch care and <br /> maintenance
            </li>
            <li>Your selection</li>{" "}
            <li>
              Frequently asked <br /> Questions
            </li>
          </ul>
        </Box>
        <Box>
          <h4>Information</h4>
          <ul
            style={{
              fontSize: "15px",
              listStyle: "none",
              paddingLeft: "0rem",
            }}>
            <li>Terms of use of the Site</li>
            <li>Privacy Notice</li>
            <li>Cookies</li>
          </ul>
        </Box>
      </Box>
    </Box>
  </div>
  // <footer className="footer">
  //   <div
  //     style={{
  //       display: "flex",
  //       flexDirection: "row",
  //       justifyContent: "space-evenly",
  //     }}>
  //     <div
  //       // className="footer"
  //       style={{
  //         display: "flex",
  //         justifyContent: "space-around",
  //         flexDirection: "column",
  //       }}>
  //       <p>Collection</p>
  //
  //     </div>
  //     {/*

  //      */}

  //     <div
  //       // className="footer"
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "space-around",
  //       }}>
  //       <p>Watches</p>
  //
  //     </div>
  //     <div>
  //       <p>Services</p>
  //
  //     </div>
  //     <div>
  //       <p>Channels</p>
  //
  //     </div>
  //     <div>
  //       <p>Information</p>
  //
  //     </div>
  //   </div>
  // </footer>
);

export default Footer;
