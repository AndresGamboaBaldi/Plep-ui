import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FlagFill } from 'react-bootstrap-icons';
import "./Video.css";

export default function Video(
) {
  return (
    <Container fluid>
      <Card className="video-card">
        <Row noGutters>
          <Col xs={4}>
            <Card.Img
              src="https://picsum.photos/200/200"
              className="thumbnail-img"
              alt="Thumbnail"
            />
          </Col>
          <Col xs={8}>
            <Card.Body className="video-card-body">
              <Card.Title className="title-text">Godzila vs Kong</Card.Title>
              <Card.Text className="genre-text">Action</Card.Text>
              <Card.Text ><FlagFill className="flag-icon"/> Estados Unidos</Card.Text>
              <Card.Text >10/02/2012</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
