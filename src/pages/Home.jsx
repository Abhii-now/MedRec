import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { addDoctor } from "../models/doctor";
import { addPatient } from "../models/patient";
import "../styles/Home.css";
function Home({ user, updateRedirect }) {
  useEffect(() => {
    updateRedirect();
  });
  const [type, setType] = useState("");
  // console.log(`type: ${type}`);
  // console.log(`user: ${user}`);
  async function handleClickDoc() {
    const res = await addDoctor(user);
    if (res) setType("Doctor");
  }
  async function handleClickPat() {
    const res = await addPatient(user);
    if (res) setType("Patient");
  }
  if (type === "Doctor") {
    return <Navigate to="/doctor" />;
  }
  if (type === "Patient") {
    return <Navigate to="/patient" />;
  }
  if (user != undefined)
    return (
      <Container fluid className="mainContainer d-flex align-items-center">
        <div className="">
          <div>
            <Row>
              <Col xs={6}>
                <h1>Welcome</h1>
                <p>{user}</p>
              </Col>
              <Col xs={6}></Col>
            </Row>
          </div>
          <Row className="mainRow">
            <Col className="buttonCol" xs={6}>
              <div>
                <Button className="me-3" onClick={() => handleClickDoc()}>
                  Login as Doctor
                </Button>
              </div>
              <div>
                <Button onClick={() => handleClickPat()}>
                  Login as Patient
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  else return <h1>WALLET NOT CONNECTED</h1>;
}
export default Home;
