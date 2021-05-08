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
      <Row noGutters>
        <Col lg={6} md={12}>
          <ReactPlayer
            width="100%"
            controls
            url="https://youtu.be/odM92ap8_c0"
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col lg={6} md={12}>
          <Card className="text-left">
            <div id="module" class="card-block px-2">
              <Row noGutters>
                <Col>
                  <h4 class="card-title">Godzila vs Kong</h4>
                </Col>
                <Col>
                  <p class="card-text">Action</p>
                </Col>
              </Row>
              <Collapse in={open}>
                <div id="video-description">
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
                </div>
              </Collapse>
              <Button
                variant="link"
                onClick={() => setOpen(!open)}
                aria-controls="video-description"
                aria-expanded={open}
              >{open ? "- Show Less" : "+ Show More"}
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
