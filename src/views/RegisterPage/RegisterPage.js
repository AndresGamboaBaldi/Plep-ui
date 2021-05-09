import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Register from "../../components/Register/Register";
import WellcomeDisplay from "../../components/WellcomeDisplay/WellcomeDisplay";
import "./RegisterPage.css";

export default function StartPage() {
  return (
      <Container className="body">
        <Row>
          <Col m={6}>
            <Register></Register>
          </Col>
          <Col m={6}>
            <WellcomeDisplay></WellcomeDisplay>
          </Col >
        </Row>
      </Container>
  );
}