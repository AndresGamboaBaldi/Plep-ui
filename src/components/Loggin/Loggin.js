import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { PersonCircle, Key, EnvelopeFill } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";

import "./Loggin.css";
export default function Loggin() {
  

  return (
      <div>
    <Form className="text-center bg-white form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="labels">Email address</Form.Label>

        <Container>
          <Row>
            <Col></Col>
            <Col xs={1}>
              <PersonCircle size={40}/>
            </Col>
            <Col xs={9}>
              <Form.Control type="email" placeholder="Enter email" />
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="labels">Password</Form.Label>
        <Container>
            <Row>
            <Col></Col>
                <Col xs={1}>
                    <Key size={40}/>
                </Col>
                <Col xs={9}>
                    <Form.Control type="password" placeholder="Password" />
                </Col>
                <Col></Col>
            </Row>
        </Container>
        
      </Form.Group>
      <Button type="submit" className="btn-sesion">
        Iniciar Sesion
      </Button>
    </Form>
    <Card className="text-center bg-white card">
    <Card.Title className="labels">
        No es un miembro? Registrese hoy!
    </Card.Title>
    <Card.Body>
        <Button type="submit" className="btn-register"><EnvelopeFill size={30}/> Registro por correo</Button>
    </Card.Body>
    </Card>
    </div>
  );
}
