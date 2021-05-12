import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Header.css";
import UserStore from "../../Store/UserData.js";


export default function Video(
) {
  const LoggOut = UserStore(state => state.LoggOut);
  const user = UserStore((state) => state.user);
  let history = useHistory();

  function loadHome(){
    let filters = {
      genre : "",
      country: "",
      startDate : "",
      endDate: "",
      searchTerm: ""
    };
    history.push({
      pathname: '/home',
      state: { filters: filters }
    });
  }

  return (
    <Container fluid className="body">
      <Row noGutters>

        <Col xs={2} lg={1}>
            <Image className ="image" src={process.env.PUBLIC_URL + '/play-icon.png'} onClick={() => loadHome()} rounded />
        </Col>
        <Col xs={5} lg={8}>
            <h1 className="title"> Plep </h1>
        </Col>
        <Col xs={2} lg={1} className="mb-4">
            <Image className = "image" src="https://picsum.photos/id/1074/80/80" roundedCircle />
        </Col>
        <Col xs={3} lg={2}>
            <h1 className="username">{user} </h1>
            <Button variant="text" className="sign-out-text" onClick={() => LoggOut()}>Sign Out</Button>
        </Col>
      </Row>
    </Container>
  );
}