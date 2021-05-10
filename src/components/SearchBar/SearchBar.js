import React from "react";
import { Container, Row, InputGroup, FormControl, Dropdown, Form} from "react-bootstrap";
import { Search } from 'react-bootstrap-icons';
import "./SearchBar.css";

export default function Video(
) {
  return (
    <Container fluid className="body">
      <Row noGutters className="bar">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Movie"
            aria-label="Search Movie"
            aria-describedby="basic-addon1"
            className="form-control" required
          />
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1" className="form-control">
            <Search className="search-icon"/>
            </InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
      </Row>
      <Row noGutters className="filters"> 
          
          <h1 className="filterText"> Filters: </h1>

          <Dropdown className="dropdowns">
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              Gender
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Animation</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Science Fiction</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        
          <h2 className="filterText"> Date between: </h2>

          <Form.Group className="datePicker" controlId="dob">
            <Form.Control type="date" name="dob" placeholder="first date" />
          </Form.Group>

          <h2 className="filterText"> and </h2>

          <Form.Group className="datePicker" controlId="dob">
            <Form.Control type="date" name="dob" placeholder="second date" />
          </Form.Group>

        <Dropdown className="dropdowns">
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              Country
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">USA</Dropdown.Item>
              <Dropdown.Item href="#/action-2">China</Dropdown.Item>
              <Dropdown.Item href="#/action-3">France</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Row>
    </Container>
  );
}