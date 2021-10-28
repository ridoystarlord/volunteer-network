import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Event from "../Event/Event";
import "./EventsList.css";

const EventsList = () => {
  const [eventList, setEventList] = useState([]);
  const { isLoading } = useAuth();

  useEffect(() => {
    fetch("https://pure-savannah-63300.herokuapp.com/eventslist")
      .then((res) => res.json())
      .then((data) => setEventList(data));
  }, []);

  if (isLoading) {
    return (
      <p className="text-center my-5">
        <Spinner animation="border" variant="danger" />
      </p>
    );
  }

  return (
    <Container className="my-5">
      <Row xs={1} md={3} lg={4} className="g-4">
        {eventList.map((event) => (
          <Event key={event.id} event={event}></Event>
        ))}
      </Row>
    </Container>
  );
};

export default EventsList;
