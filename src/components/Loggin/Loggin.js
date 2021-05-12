import React from "react";
import { useHistory } from "react-router-dom";
import {withRouter} from 'react-router';
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import {
  PersonCircle,
  Key,
  EnvelopeFill,
  EyeFill,
  EyeSlashFill,
} from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import axios from "axios";
import UserStore from "../../Store/UserData.js";
import "./Loggin.css";


export default function Loggin() {
  const [values, setValues] = React.useState({
    showPassword: false,
    data: [],
  });

  const LoggIn = UserStore(state => state.LoggIn)
  const[email, setEmail] = React.useState('');
  const[password, setPassword] = React.useState('');
  let history = useHistory();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const signIn = (username, newemail) =>{
    LoggIn(username,newemail);
  }

  async function verifyPassword() {
    let index = -1;
    axios
      .get("https://plep.herokuapp.com/api/user")
      .then((response) => {
        values.data = response.data;
        console.log("funciona", values.data);
        var flag=false;
        for (var x = 0; x < values.data.length; x++) {
          if (
            email == values.data[x].email &&
            password == values.data[x].password
          ) {
            console.log("login!");
            index = x;
            flag=true;
            x=values.data.length;
          } else{
            console.log("no login");
            console.log("Usuario introducido", email);
            console.log("Usuario esperado", values.data[x].email);
            
            console.log("Contrasena introducida", password);
            console.log("Contrasena esperada", values.data[x].password);
          }
        }
        if(flag)
        {
          signIn(values.data[index].userName, values.data[index].email);
          let filters = {
            genre : "",
            country: "",
            startDate : "",
            endDate: ""
          };
          history.push({
            pathname: '/home',
            state: { filters: filters }
          });
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  function goToRegister () {
    history.push("/register")
  }

  return (
    <div>
      <Form className="text-center bg-white formLoggin">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="labelsHeader">Bienvenido a Plep videos!!!</Form.Label>
          <br/>
          <Form.Label className="labels">Email</Form.Label>
          <Container>
            <Row>
              <Col xs={1}></Col>
              <Col xs={1}>
                <PersonCircle size={40} />
              </Col>
              <Col xs={9}>
                
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleChange}
                  className="inputLoggin"
                />
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
                  value={password}
                  onChange={handleChangePassword}
                  placeholder="Password"
                />
              </Col>
              <Col>
                <Button
                  className="btn-showHideLoggin"
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
        <Button className="btn-sesion" onClick={verifyPassword}>
          Iniciar Sesion
        </Button>
      </Form>
      <Card className="text-center bg-white card">
        <Card.Title className="labels">
          No es un miembro? Registrese hoy!
        </Card.Title>
        <Card.Body>
          <Button type="submit" className="btn-register" onClick={goToRegister}>
            <EnvelopeFill size={30} /> Registro por correo
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
