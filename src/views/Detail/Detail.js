import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import "./Detail.css";

export default function Detail() {
  const mock = [1, 2, 3, 4, 5];
  return (
    <Container fluid className="body">
      <Row noGutters>
        <Col lg={8} md={12}>
          <VideoInfo />
        </Col>
        <Col lg={4} md={12} className="mb-4">
          {mock.map((data) => (
            <Video />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
