import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Register.css";
import axios from "axios";
import validator from "validator";

export default function Register() {
  const returnToLoggin = () => {
    history.push("/");
  };

  const [valuesInitial, setValuesInitial] = React.useState({
    password: "",
    showPasswordInitial: false,
  });
  let history = useHistory();
  let toasterror = {
    position: toast.POSITION.BOTTOM_CENTER,
    className: "ErrorMessage",
    progressClassName: "ErrorProgress",
  };
  let toastSuccess = {
    position: toast.POSITION.BOTTOM_CENTER,
    onClose: returnToLoggin,
    autoClose: 5000,
    className: "SuccessUser",
    progressClassName: "SuccessProgress",
  };
  const notifyBirthday = () =>
    toast(
      "Elija una fecha de nacimiento", toasterror
    );
  const notifyInputs = () =>
    toast(
      "Error al ingreso de datos, solo se admiten letras en los campos de nombre, apellido y nacionalidad",
      toasterror
    );
  const notifyValidation = () =>
    toast(
      "Error al ingreso de datos, Revise que todos los campos esten llenos e intente de nuevo",
      toasterror
    );
  const notifyPassword = () =>
    toast("Las contraseñas no coinciden", toasterror);
  const notifyEmail = () =>
    toast("Ingrese una direccion de correo valida", toasterror);
  const notifyExistingUser = () =>
    toast("el correo ya esta registrado!", toasterror);
  const notifyUser = () => toast("Usuario registrado con exito!", toastSuccess);

  const [valuesConfirm, setValuesConfirm] = React.useState({
    password: "",
    showPasswordConfirm: false,
  });

  const [values, setValues] = React.useState({
    data: [],
  });
  const [updatedDate, setUpdatedDate] = React.useState(false);
  const [name, setName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [passwordInitial, setPasswordInitial] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [birdthday, setbirdthday] = React.useState(new Date());
  const [gender, setGender] = React.useState("");
  const [nationality, setNationality] = React.useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePasswordInitial = (e) => {
    setPasswordInitial(e.target.value);
  };

  const handleChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleChangeBirdthday = (e) => {
    setbirdthday(e.target.value);
    setUpdatedDate(true);
  };

  const handleChangeGender = (e) => {
    console.log(gender);
    setGender(e.target.value);
  };

  const handleChangeNationality = (e) => {
    setNationality(e.target.value);
  };
  const handleClickShowPasswordInitial = () => {
    setValuesInitial({
      ...valuesInitial,
      showPasswordInitial: !valuesInitial.showPasswordInitial,
    });
  };

  const handleMouseDownPasswordInitial = (event) => {
    event.preventDefault();
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

  const verifyEmail = () => {
    return validator.isEmail(email);
  };

  const verifyInputs = () => {
    return (
      validator.isAlpha(name) &&
      validator.isAlpha(lastname) &&
      validator.isAlpha(nationality)
    );
  };

  const verifyPasswords = () => {
    if (passwordInitial === passwordConfirm) {
      return true;
    }
    return false;
  };

  const verifyFields = () => {
    if (
      name.trim() === "" ||
      lastname.trim() === "" ||
      passwordInitial.trim() === "" ||
      passwordConfirm.trim() === "" ||
      nationality.trim() === ""
    ) {
      return false;
    }
    return true;
  };

  async function createUser() {
    var flag = false;
    axios
      .get("https://plep.herokuapp.com/api/user")
      .then((response) => {
        values.data = response.data;
        for (var x = 0; x < values.data.length; x++) {
          if (email == values.data[x].email) {
            notifyExistingUser();
            flag = true;
            x = values.data.length;
          }
        }
        if (!flag) {
          if (verifyFields()) {
            if (verifyEmail()) {
              if (verifyInputs()) {
                if (updatedDate) {
                  if (verifyPasswords()) {
                    axios
                      .post("https://plep.herokuapp.com/api/user", {
                        userName: name + " " + lastname,
                        email: email,
                        password: passwordInitial,
                        birthdate: birdthday,
                        gender: gender,
                        country: nationality,
                      })
                      .then(function (response) {
                        console.log(response);
                        notifyUser();
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                  } else {
                    notifyPassword();
                  }
                } else {
                  notifyBirthday();
                }
              } else {
                notifyInputs();
              }
            } else {
              notifyEmail();
            }
          } else {
            notifyValidation();
          }
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  }

  return (
    <Form className="text-center bg-white form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="labels">Registrarse</Form.Label>

        <Container>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form.Label className="labels"> Nombre </Form.Label>
              <Form.Control
                type="text"
                placeholder="Pepe"
                value={name}
                onChange={handleChangeName}
              />
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form.Label className="labels"> Apellido </Form.Label>
              <Form.Control
                type="text"
                placeholder="Perez"
                value={lastname}
                onChange={handleChangeLastName}
              />
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form.Label className="labels"> Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="PPerez@gmail.com"
                value={email}
                onChange={handleChangeEmail}
              />
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
                value={passwordInitial}
                onChange={handleChangePasswordInitial}
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
                value={passwordConfirm}
                onChange={handleChangePasswordConfirm}
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
              <Form.Control
                type="date"
                name="Date"
                placeholder="DateOfBirth"
                value={birdthday}
                onChange={handleChangeBirdthday}
              />
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <Form.Label className="labels">Sexo</Form.Label>
              <Form.Control
                as="select"
                size="sm"
                custom
                value={gender}
                onChange={handleChangeGender}
              >
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
              <Form.Control
                type="text"
                placeholder="Nacionalidad"
                value={nationality}
                onChange={handleChangeNationality}
              />
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Container>
      </Form.Group>

      <Button className="btn-registrarse" onClick={createUser}>
        Registrarse
      </Button>
      <ToastContainer />
    </Form>
  );
}
