import React from "react";
import { useHistory } from "react-router-dom";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Loggin() {
  const [values, setValues] = React.useState({
    showPassword: false,
    data: [],
  });
  let history = useHistory();
  const goToHome = () => {
    history.push("/home");
  };

  let toasterror = {
    position: toast.POSITION.BOTTOM_CENTER,
    className: "ErrorMessage",
    progressClassName: "ErrorProgress",
  };
  let toastSuccess = {
    position: toast.POSITION.BOTTOM_CENTER,
    onClose: goToHome,
    autoClose: 2000,
    className: "SuccessUser",
    progressClassName: "SuccessProgress",
  };
  const notifyValidation = () =>
    toast("Email o Contraseña incorrecto", toasterror);
  const notifyUserLoggin = () =>
    toast("Usuario ingresado correctamente", toastSuccess);

  const LoggIn = UserStore((state) => state.LoggIn);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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

  const signIn = (username, newemail) => {
    LoggIn(username, newemail);
  };

  async function verifyPassword() {
    let index = -1;
    axios
      .get("https://plep.herokuapp.com/api/user")
      .then((response) => {
        values.data = response.data;
        console.log("funciona", values.data);
        var flag = false;
        for (var x = 0; x < values.data.length; x++) {
          if (
            email === values.data[x].email &&
            password === values.data[x].password
          ) {
            index = x;
            flag = true;
            x = values.data.length;
          }
        }
        if (flag) {
          signIn(values.data[index].userName, values.data[index].email);
          let filters = {
            genre: "",
            country: "",
            startDate: "",
            endDate: "",
            searchTerm: "",
          };
          history.push({
            pathname: "/home",
            state: { filters: filters },
          });

          notifyUserLoggin();
        } else {
          notifyValidation();
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  }

  function goToRegister() {
    history.push("/register");
  }

  return (
    <div>
      <Form className="text-center bg-white formLoggin">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="labelsHeader">
            Welcome to PLEP videos!!!
          </Form.Label>
          <br />
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
          Log In
        </Button>
      </Form>
      <Card className="text-center bg-white card">
        <Card.Title className="labels">
          Not a member? join today!!!
        </Card.Title>
        <Card.Body>
          <Button type="submit" className="btn-register" onClick={goToRegister}>
            <EnvelopeFill size={30} /> Email Register
          </Button>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
}
