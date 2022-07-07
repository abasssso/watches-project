import React from "react";

const Footer = () => (
  <footer className="footer">
    <p
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "30px",
        paddingTop: "50px",
      }}>
      A.D. Watches
    </p>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}>
      <p>Collection</p>
      <p>Watches</p>
      <p>Services</p>
      <p>Channels</p>
      <p>Information</p>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}>
      <ul style={{ fontSize: "15px", listStyle: "none" }}>
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
      <ul style={{ fontSize: "15px", listStyle: "none" }}>
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
      <ul style={{ fontSize: "15px", listStyle: "none" }}>
        <li>Buy A.D. Watches</li>
        <li>Find a distributor</li>
        <li>
          Watch care and <br /> maintenance
        </li>
        <li>Your selection</li>
        <li>
          Frequently asked <br /> Questions
        </li>
      </ul>
      <ul style={{ fontSize: "15px", listStyle: "none" }}>
        <li>
          {" "}
          <img
            width={"18px"}
            src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"
            alt=""
          />{" "}
          Facebook
        </li>
        <li>
          <img
            width={"18px"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
            alt=""
          />{" "}
          Instagram
        </li>
        <li>
          <img
            width={"18px"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            alt=""
          />{" "}
          Twitter
        </li>
        <li>
          <img
            width={"18px"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
            alt=""
          />{" "}
          Youtube
        </li>
        <li>
          <img
            width={"18px"}
            src="https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png"
            alt=""
          />{" "}
          Pinterest
        </li>
        <li>
          <img
            width={"18px"}
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt=""
          />{" "}
          LinkedIn
        </li>
      </ul>
      <ul style={{ fontSize: "15px", listStyle: "none" }}>
        <li>Terms of use of the Site</li>
        <li>Privacy Notice</li>
        <li>Cookies</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
