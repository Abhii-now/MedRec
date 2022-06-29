import { Accordion, Col, Container, Row } from "react-bootstrap";
import { getUser } from "./User";
import "./PrescAccordion.styles.css";
export const PresAccordion = (doctor, prescription, date) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Container fluid>
            <Row className="PresHeader">
              <Col>By: {getUser(doctor)}</Col>
              <Col></Col>
              <Col>Dated: {date}</Col>
            </Row>
          </Container>
        </Accordion.Header>
        <Accordion.Body>
          <div>Doctor: {doctor}</div>
          <div>Dated: {date}</div>
          <div>Prescription: {prescription}</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
