import React, { useState } from "react";
import { Button, Col, InputGroup, Row, Toast } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./FormValidation.css";

const FormValidation = () => {
  const [validated, setValidated] = useState(false);
  const [submitData, setSubmitData] = useState({});
  const [show, setShow] = useState(false);
  console.log(submitData);
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (/^[A-Za-z ]+$/.test(submitData.name) && submitData.number) {
      setShow(true);
      setSubmitData({ name: "", number: "" });
      setValidated(true);
    }
    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <div className="col-md-4">
          <Form.Row>
            <Form.Group className="w-100" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Username"
                  value={submitData.name}
                  aria-describedby="inputGroupPrepend"
                  onChange={(e) =>
                    setSubmitData({ ...submitData, name: e.target.value })
                  }
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter valid username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
        </div>
        <div className="col-md-4">
          <Form.Row>
            <Form.Group className="w-100" controlId="validationCustomUsername">
              <Form.Label>Enter Your Mobile Number</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="number"
                  name="number"
                  value={submitData.number}
                  placeholder="Enter your mobile number"
                  aria-describedby="inputGroupPrepend"
                  onChange={(e) =>
                    setSubmitData({ ...submitData, number: e.target.value })
                  }
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
        </div>
      </Row>
      <Button type="submit">Submit form</Button>
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "relative",
          minHeight: "200px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "100px",
          }}
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={2000}
            autohide
          >
            <Toast.Header>
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </div>
      </div>
    </Form>
  );
};

export default FormValidation;
