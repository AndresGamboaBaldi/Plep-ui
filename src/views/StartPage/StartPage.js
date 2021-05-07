import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loggin from "../../components/Loggin/Loggin.js";
import WellcomeDisplay from "../../components/WellcomeDisplay/WellcomeDisplay";
import "./StartPage.css";

export default function StartPage() {
  return (
      <Container className="body">
        <Row>
          <Col m={6}>
            <Loggin></Loggin>
          </Col>
          <Col m={6}>
            <WellcomeDisplay></WellcomeDisplay>
          </Col >
        </Row>
      </Container>
  );
}
