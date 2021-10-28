import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Myevents = () => {
  const { user } = useAuth();
  let userId = [];
  userId.push(user.uid);
  const [myEvents, setMyEvents] = useState([]);
  useEffect(() => {
    fetch("https://pure-savannah-63300.herokuapp.com/user-events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userId),
    })
      .then((res) => res.json())
      .then((data) => setMyEvents(data));
  }, []);
  const handleDelete = (id) => {
    fetch(`https://pure-savannah-63300.herokuapp.com/my-events/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Delete Successful");
        if (data.deletedCount > 0) {
          setMyEvents(myEvents.filter((event) => event._id !== id));
        }
      });
  };
  return (
    <Container className="my-5">
      <Row xs={1} md={2} className="g-4">
        {myEvents.map((event) => (
          // <MySingleEvent key={event._id} event={event}></MySingleEvent>
          <Col className="h-100">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Row>
                  <Col xs={4}>
                    <img className="img-fluid" src={event.img} alt="" />
                  </Col>
                  <Col xs={8}>
                    <Card.Text className="fw-bolder fs-2">
                      {event.selectevent}
                    </Card.Text>
                    <p>{event.date}</p>
                    <Button
                      onClick={() => {
                        handleDelete(event._id);
                      }}
                      className="d-block"
                      variant="danger"
                    >
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Myevents;
