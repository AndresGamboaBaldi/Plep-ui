import React, {useState } from "react";
import { Container, Row, InputGroup, FormControl, Dropdown, Form, Button} from "react-bootstrap";
import { Search } from 'react-bootstrap-icons';
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

let isVisible = false;
export default function SearchBar({ data }) {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  let [genre, setGenre] = useState("");
  let [country, setCountry] = useState("");
  let [startDate, setStartDate] = useState("");
  let [endDate, setEndDate] = useState("");
  
  let genres = Array.from(new Set(data.map(tempObject => tempObject.genre)));
  let countries = Array.from(new Set(data.map(tempObject => tempObject.country)));

  function changeRoute (video) {
    setSearchTerm("");
    history.push({
      pathname: '/detail',
      state: { video: video }
  })}

  function filterTitle(video){
    if(searchTerm === "")
    {
      isVisible = false;
      return video
    } else if (video.title.toLowerCase().includes(searchTerm.toLowerCase())){
      return video
    }
  }
 
  function searchByFilters () {
    setSearchTerm("");
    let filters = {
      genre : genre,
      country: country,
      startDate : startDate,
      endDate: endDate,
      searchTerm: searchTerm
    }
    history.push({
      pathname: '/home',
      state: { filters: filters }
  })}
  function clearFilters () {
    setCountry("");
    setGenre("");
    setEndDate("");
    setStartDate("");
    let filters = {
      genre : genre,
      country: country,
      startDate : startDate,
      endDate: endDate,
      searchTerm: searchTerm
    }
    history.push({
      pathname: '/home',
      state: { filters: filters }
  })}

  return (
    <Container fluid className="body">
      <Row noGutters className="bar">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search by Title"
            onChange= {(event) => {
              isVisible = true;
              setSearchTerm(event.target.value);
            }}
            aria-describedby="basic-addon1"
            className="form-controlSB" required
          />
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1" className="form-controlSB">
            <Button variant="outline-primary" onClick={() => searchByFilters()}><Search className="search-icon"/></Button>
            
            </InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
      </Row>
      
      {isVisible ? 
        <div  className = "movie">
          {data.filter((val)=> 
           filterTitle(val)
            ).map((val,key) => {
              return (
                <div onClick={() => changeRoute(val)} key = {key}> 
                <p> {val.title}</p>
                </div>
              );
          })}
        </div> 
        :<div></div>  
      }
    
      <Row noGutters className="filters"> 
          
          <h1 className="filterText"> Filters: </h1>

          <Dropdown className="dropdowns">
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              Genre
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {genres.map((genre,index) => (
                <Dropdown.Item onClick={() => setGenre(genre)} key={index}>{genre}</Dropdown.Item>
              ))}
              <Dropdown.Item onClick={() => setGenre("")}>None</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {genre === "" ? <h2 className="selectedText"> None </h2>: <h2 className="selectedText"> {genre} </h2>
}
          <h2 className="filterText"> Date between: </h2>

          <Form.Group className="datePicker" controlId="dob">
            <Form.Control type="date" name="start" 
            placeholder="first date"
             onChange= {(event) => {
              setStartDate(event.target.value);
               }} />
          </Form.Group>

          <h2 className="filterText"> and </h2>

          <Form.Group className="datePicker" controlId="dob">
            <Form.Control type="date" name="end" 
            placeholder="second date"
            onChange= {(event) => {
              setEndDate(event.target.value);
            }} />
          </Form.Group>

        <Dropdown className="dropdowns">
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              Country
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {countries.map((country, index) => (
                <Dropdown.Item onClick={() => setCountry(country)} key={index}>{country}</Dropdown.Item>
              ))}
              <Dropdown.Item onClick={() => setCountry("")}>None</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {country === "" ? <h2 className="selectedText"> None </h2>: <h2 className="selectedText"> {country} </h2>}

          <Button size="sm" className="buttons" variant="danger" onClick={() => searchByFilters()}> Apply Filters </Button>
          <Button size="sm" className="buttons" variant="dark" onClick={() => clearFilters()}> Clear Filters </Button>
      </Row>
    </Container>
  );
}