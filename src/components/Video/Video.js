import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FlagFill } from 'react-bootstrap-icons';


export default function Video(
) {
  return (
    <Container fluid>
      <Card className="text-left" >
        <Row noGutters>
          <Col xs={4}>
            <img
              src="https://picsum.photos/200/100"
              class="img-fluid"
              alt="Thumbnail"
            />
          </Col>
          <Col xs={8}>
            <Card.Body>
              <Card.Title>Godzila vs Kong</Card.Title>
              <Card.Text className="red-text">Action</Card.Text>
              <Card.Text ><FlagFill /> Estados Unidos</Card.Text>
              <Card.Text >10/02/2012</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
