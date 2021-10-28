import React from "react";
import { Container } from "react-bootstrap";
import img from "../../images/notfound.jpg";

const NotFound = () => {
  return (
    <Container className="d-flex justify-content-center">
      <img src={img} className="img-fluid" alt="" />
    </Container>
  );
};

export default NotFound;
