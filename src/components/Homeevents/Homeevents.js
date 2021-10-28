import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Event from "../Event/Event";

const Homeevents = () => {
  const [eventList, setEventList] = useState([]);
  const { isLoading } = useAuth();
  useEffect(() => {
    fetch("https://pure-savannah-63300.herokuapp.com/eventslist")
      .then((res) => res.json())
      .then((data) => setEventList(data.slice(0, 8)));
  }, []);

  if (isLoading) {
    return (
      <p className="text-center my-5">
        <Spinner animation="border" variant="danger" />
      </p>
    );
  }
  return (
    <Container className="mb-5">
      <Row xs={1} md={3} lg={4} className="g-4">
        {eventList.map((event) => (
          <Event key={event.id} event={event}></Event>
        ))}
      </Row>
      <div>
        <Link to="/events">
          <Button className="mt-5 w-50 mx-auto d-block" variant="primary">
            See all events
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Homeevents;
