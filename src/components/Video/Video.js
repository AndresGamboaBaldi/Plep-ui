import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FlagFill } from "react-bootstrap-icons";
import "./Video.css";

export default function Video({ data }) {
  return (
    <Container fluid>
      <Card className="video-card">
        <Row noGutters>
          <Col xs={4}>
            <Card.Img
              src={data.img}
              className="thumbnail-img"
              alt="Thumbnail"
            />
          </Col>
          <Col xs={8}>
            <Card.Body className="video-card-body">
              <Card.Title className="title-text">{data.title}</Card.Title>
              <Card.Text className="genre-text">{data.genre}</Card.Text>
              <Card.Text>
                <FlagFill className="flag-icon" />
                {data.country}
              </Card.Text>
              <Card.Text>{data.date.substring(0, 10)}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
