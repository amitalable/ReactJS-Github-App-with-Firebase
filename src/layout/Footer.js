import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-info text-info text-white text-uppercase fixed-bottom p-3 mt-5"
    >
      LCO Github search App with Firebase
    </Container>
  );
};

export default Footer;
