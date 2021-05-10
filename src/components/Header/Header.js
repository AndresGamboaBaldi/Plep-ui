import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Header.css";

export default function Video(
) {
  return (
    <Container fluid className="body">
      <Row noGutters>

        <Col lg={1} md={12}>
            <Image className ="image" src={process.env.PUBLIC_URL + '/play-icon.png'} rounded />
        </Col>
        <Col lg={7} md={12}>
            <h1 className="title"> Plep </h1>
        </Col>
        <Col lg={1} md={12} className="mb-4">
            <Image className = "image" src="https://picsum.photos/id/1074/80/80" roundedCircle />
        </Col>
        <Col lg={3} md={12}>
            <h1 className="title"> Andres Gamboa </h1>
        </Col>
      </Row>
    </Container>
  );
}