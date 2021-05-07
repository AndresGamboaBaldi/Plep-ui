import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import {
  PersonCircle,
  Key,
  EnvelopeFill,
  EyeFill,
  EyeSlashFill,
} from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";

import "./Loggin.css";
export default function Loggin() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <Form className="text-center bg-white form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="labels">Email address</Form.Label>

          <Container>
            <Row>
              <Col xs={1}></Col>
              <Col xs={1}>
                <PersonCircle size={40} />
              </Col>
              <Col xs={9}>
                <Form.Control type="email" placeholder="Enter email" />
              </Col>
              <Col xs={1}></Col>
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
              <Col xs={1}></Col>
              <Col xs={1}>
                <Key size={40} />
              </Col>
              <Col xs={7}>
                <Form.Control
                  type={values.showPassword ? "text" : "password"}
                  placeholder="Password"
                />
              </Col>
              <Col>
                <Button
                  className="btn-showHide"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? (
                    <EyeFill xs={1} size={30} className="icons" />
                  ) : (
                    <EyeSlashFill xs={1} size={30} className="icons" />
                  )}
                </Button>
              </Col>
              <Col xs={1}></Col>
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
          <Button type="submit" className="btn-register">
            <EnvelopeFill size={30} /> Registro por correo
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
