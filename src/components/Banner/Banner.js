import React from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Container className="my-3 py-5 text-center">
      <h1 className="text-uppercase">I grow by helping people in need</h1>
      <div className="d-flex justify-content-center">
        <Form className="d-flex mt-2">
          <FormControl
            type="search"
            placeholder="Search"
            className=""
            aria-label="Search"
          />
          <Button variant="primary">Search</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Banner;
