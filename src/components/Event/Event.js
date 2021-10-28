import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Event.css";

const Event = (props) => {
  const { name, img, id } = props.event;
  const colorList = ["#FFBD3E", "#FF7044", "#3F90FC", "#421FCF"];

  return (
    <div>
      <Col className="h-100">
        <Link className="text-decoration-none" to={`/registerevent/${id}`}>
          <Card
            style={{
              backgroundColor: colorList[Math.floor(Math.random() * 4)],
            }}
            className="shadow-sm h-100 border-0 event-card"
          >
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title className="text-center text-white">{name}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </div>
  );
};

export default Event;
