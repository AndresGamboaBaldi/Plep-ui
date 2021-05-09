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

export default function VideoInfo(
) {
  const [open, setOpen] = useState(false);
  return (
    <Container fluid>
          <ReactPlayer
            width="100%"
            controls
            url="https://youtu.be/odM92ap8_c0"
          />
          <Card className="text-left info-card">
            <div id="module" className="card-block">
              <Row noGutters>
                <Col>
                  <Card.Title className="title-text">Godzila vs Kong</Card.Title>
                </Col>
                <Col>
                  <Card.Text className="genre-text">Action</Card.Text>
                </Col>
              </Row>
              <Collapse in={open}>
                <Card.Text id="video-description">
                  Godzilla vs. Kong is a 2021 American monster film directed by
                  Adam Wingard. A sequel to Godzilla: King of the Monsters
                  (2019) and Kong: Skull Island (2017), it is the fourth film in
                  Legendary's MonsterVerse. It is also the 36th film in the
                  Godzilla franchise, the 12th film in the King Kong franchise,
                  and the fourth Godzilla film to be completely produced by a
                  Hollywood studio.[b] The film stars Alexander Skarsgård,
                  Millie Bobby Brown, Rebecca Hall, Brian Tyree Henry, Shun
                  Oguri, Eiza González, Julian Dennison, Lance Reddick, Kyle
                  Chandler, and Demián Bichir. In the film, Kong clashes with
                  Godzilla as humans lure the ape into the Hollow Earth to
                  retrieve a power source for a weapon to stop Godzilla's
                  mysterious rampages.
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