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
import "react-datepicker/dist/react-datepicker.css";
import "./Register.css";
export default function Register() {
  const [valuesInitial, setValuesInitial] = React.useState({
    password: "",
    showPasswordInitial: false,
  });

  const [valuesConfirm, setValuesConfirm] = React.useState({
    password: "",
    showPasswordConfirm: false,
  });

  const [startDate, setStartDate] = React.useState(new Date());

  const handleClickShowPasswordInitial = () => {
    setValuesInitial({
      ...valuesInitial,
      showPasswordInitial: !valuesInitial.showPasswordInitial,
    });
  };

  const handleMouseDownPasswordInitial = (event) => {
    event.preventDefault();
  };

  const handlePasswordChangeInitial = (prop) => (event) => {
    setValuesInitial({ ...valuesInitial, [prop]: event.target.valuesInitial });
  };

  const handleClickShowPasswordConfirm = () => {
    setValuesConfirm({
      ...valuesConfirm,
      showPasswordConfirm: !valuesConfirm.showPasswordConfirm,
    });
  };

  const handleMouseDownPasswordConfirm = (event) => {
    event.preventDefault();
  };

  const handlePasswordChangeConfirm = (prop) => (event) => {
    setValuesConfirm({ ...valuesConfirm, [prop]: event.target.valuesConfirm });
  };

  return (
    <Form className="text-center bg-white form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="labels" bold>Registrarse</Form.Label>

        <Container>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form.Label className="labels"> Nombre </Form.Label>
              <Form.Control type="text" placeholder="Pepe" />
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form.Label className="labels"> Apellido </Form.Label>
              <Form.Control type="text" placeholder="Perez" />
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form.Label className="labels"> Email </Form.Label>
              <Form.Control type="email" placeholder="PPerez@gmail.com" />
            </Col>
            <Col xs={1}></Col>
            <Form.Text className="text-muted label-text">
              Nunca compartiremos tu informacion personal con nadie.
            </Form.Text>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={8}>
              <Form.Label className="labels">Ingrese Contraseña</Form.Label>
              <Form.Control
                type={valuesInitial.showPasswordInitial ? "text" : "password"}
                placeholder="Pass123"
              />
            </Col>
            <Col>
              <Button
                className="btn-showHide"
                onClick={handleClickShowPasswordInitial}
                onMouseDown={handleMouseDownPasswordInitial}
              >
                {valuesInitial.showPasswordInitial ? (
                  <EyeFill xs={1} size={25} className="icons" />
                ) : (
                  <EyeSlashFill xs={1} size={25} className="icons" />
                )}
              </Button>
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={8}>
              <Form.Label className="labels">Confirme contraseña</Form.Label>
              <Form.Control
                type={valuesConfirm.showPasswordConfirm ? "text" : "password"}
                placeholder="Pass123"
              />
            </Col>
            <Col>
              <Button
                className="btn-showHide"
                onClick={handleClickShowPasswordConfirm}
                onMouseDown={handleMouseDownPasswordConfirm}
              >
                {valuesConfirm.showPasswordConfirm ? (
                  <EyeFill xs={1} size={25} className="icons" />
                ) : (
                  <EyeSlashFill xs={1} size={25} className="icons" />
                )}
              </Button>
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form.Label className="labels">Fecha de Nacimiento</Form.Label>
              <Form.Control type="date" name="Date" placeholder="DateOfBirth" />
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form.Label className="labels">Sexo</Form.Label>
              <Form.Control as="select" size="sm" custom>
                <option>Masculino</option>
                <option>Femenino</option>
              </Form.Control>
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form.Label className="labels">Nacionalidad</Form.Label>
              <Form.Control type="text" placeholder="Nacionalidad"/>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Container>
      </Form.Group>

      <Button type="submit" className="btn-registrarse">
        Registrarse
      </Button>
    </Form>
  );
}
