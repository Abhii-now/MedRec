import { useState, useEffect } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
export const ReactForm = (updateInput, label, condition, sz = "auto") => {
  const [input, setInput] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    // console.log(updateInput);
    await updateInput(input);
    setInput("");
  }
  // console.log(`condi:  ${condition}`);
  if (condition == undefined || condition == "" || condition == false)
    return (
      <Form className="form-inline" onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput">{label}: </Form.Label>
          </Col>
          <Col xs={sz}>
            <Form.Control
              id="inlineFormInput"
              type="text"
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    );
};
