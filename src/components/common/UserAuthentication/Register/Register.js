import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./Register.css";
import logo from "../../../../images/logo.png";
import useAuth from "../../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Register = () => {
  const { googleSignIn, setUser } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/";
  const handleSignBtnClick = () => {
    googleSignIn()
      .then((result) => {
        const userinfo = result.user;
        fetch("https://pure-savannah-63300.herokuapp.com/register", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userinfo),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        setUser(userinfo);
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <img
          width="250"
          src={logo}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Container>
      <Container className="d-flex justify-content-center my-5">
        <Card className="p-5 ">
          <Card.Body>
            <Card.Title className="text-center fw-bolder fs-3">
              Login With
            </Card.Title>
            <Button
              onClick={() => {
                handleSignBtnClick();
              }}
              className="d-block w-100  my-3 rounded-pill registerBtn"
              variant="outline-secondary"
            >
              Continue with Google
            </Button>
            <Card.Text>Don’t have an account? Create an account</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
