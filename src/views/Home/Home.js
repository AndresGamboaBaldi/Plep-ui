import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/Video/Video";
import "./Home.css";

export default function Home() {
const mock = [1,2,3,4,5]
  return (
      <Container fluid className="body">
          <Row noGutters>
          {mock.map((data) => (
            <Col xs={6} lg={3} className="mb-5">
              <Video/>
            </Col>
          ))}
          </Row>
      </Container>
  );
}
