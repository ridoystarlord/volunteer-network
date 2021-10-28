import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const RegisterEvent = () => {
  const history = useHistory();
  const { id } = useParams();
  const { user } = useAuth();
  const [event, setEvent] = useState([]);
  const eventName = event.name;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("https://pure-savannah-63300.herokuapp.com/eventslist")
      .then((res) => res.json())
      .then((data) => setEvent(data.find((ev) => ev.id === id)));
  }, [id]);

  const onSubmit = (data) => {
    data.uid = user.uid;
    data.img = event.img;
    fetch("https://pure-savannah-63300.herokuapp.com/event-register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Register Successful");
          history.push("/");
        }
      });
  };
  return (
    <Container className="my-3">
      <div className="d-flex justify-content-center">
        <Card className="p-5">
          <Card.Body>
            <Card.Title className="fw-bolder text-center fs-2 mb-5">
              Register as a Volunteer
            </Card.Title>
            <Card.Text>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                  <input
                    placeholder="Enter Your Name"
                    className="w-100 p-2"
                    defaultValue={user.displayName}
                    {...register("name", { required: true })}
                  />{" "}
                  {errors.name && <span>Name is required</span>}
                </p>
                <p>
                  <input
                    placeholder="Enter Your Email"
                    className="w-100 p-2"
                    defaultValue={user.email}
                    {...register("email", { required: true })}
                  />{" "}
                  {errors.email && <span>Email is required</span>}
                </p>
                <p>
                  <input
                    placeholder="Select today date"
                    className="w-100 p-2"
                    type="date"
                    {...register("date", { required: true })}
                  />{" "}
                  {errors.date && <span>Date is required</span>}
                </p>
                <p>
                  <input
                    placeholder="Describe about you"
                    className="w-100 p-2"
                    {...register("about", { required: true })}
                  />{" "}
                  {errors.about && <span>About You is required</span>}
                </p>
                <p>
                  <input
                    placeholder="Enter event name"
                    className="w-100 p-2"
                    defaultValue={eventName}
                    {...register("selectevent", { required: true })}
                  />{" "}
                  {errors.selectevent && <span>Event is required</span>}
                </p>

                <input
                  value="Register"
                  className="w-100 bg-primary border-0 text-white py-2 rounded"
                  type="submit"
                />
              </form>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default RegisterEvent;
