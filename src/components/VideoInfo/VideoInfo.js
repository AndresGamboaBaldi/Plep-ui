import React, { useState } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Container,
  Collapse,
} from "react-bootstrap";
import ReactPlayer from "react-player";
import "./VideoInfo.css";

export default function VideoInfo({data}
) {
  const [open, setOpen] = useState(false);
  return (
    <Container fluid>
          <ReactPlayer
            width="100%"
            controls
            url={data ? data.url : ""}
          />
          <Card className="text-left info-card">
            <div id="module" className="card-block">
              <Row noGutters>
                <Col>
                  <Card.Title className="title-text">{data ? data.title : ""}</Card.Title>
                </Col>
                <Col>
                  <Card.Text className="genre-text">{data ? data.genre : ""}</Card.Text>
                </Col>
              </Row>
              <Collapse in={open}>
                <Card.Text id="video-description">
                {data ? data.description : ""}
                </Card.Text>
              </Collapse>
              <Button
                variant="link"
                onClick={() => setOpen(!open)}
                aria-controls="video-description"
                aria-expanded={open}
                className="link-button"
              >{open ? "- Show Less" : "+ Show More"}
              </Button>
            </div>
          </Card>
    </Container>
  );
}
