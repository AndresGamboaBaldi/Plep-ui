import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/Video/Video";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import axios from "axios";



export default function Home() {
const [filters, setFilters] = useState({});
const [movies, setMovies] = useState([]);

useEffect(() => {
  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://plep.herokuapp.com/api/movies"
      );
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };
  

  getMovies().catch(null);
}, []);


const location = useLocation();

useEffect(() => {
  const passedFilters = location.state ? location.state.filters : {};
  setFilters(passedFilters);
}, [location]);

function validateFilters (video) {
  console.log(filters)
  if(typeof filters === 'undefined'){
    return true
  } else if (validateGenre(filters.genre, video.genre)){
    return false
  } else if (validateCountry(filters.country, video.country)){
    return false
  } else if (validateDate(filters.startDate, filters.endDate, video.date)){
    return false
  } else {
    return true
  }
}

function validateDate(startDate, endDate, videoDate){
  var dateFrom = startDate;
  var dateTo = endDate;
  var dateCheck = videoDate.substring(0, 10);

  var d1 = dateFrom.split("-");
  var d2 = dateTo.split("-");
  var c = dateCheck.split("-");
  var from = new Date(d1[0], parseInt(d1[1])-1, d1[2]);  // -1 because months are from 0 to 11
  var to   = new Date(d2[0], parseInt(d2[1])-1, d2[2]);
  var check = new Date(c[0], parseInt(c[1]-1), c[2]);
 //"02/05/2013"
 //"2003-01-31"
  console.log(from)
  console.log(to)
  console.log(to)
  console.log(check > from && check < to)
  return !(startDate === "" || endDate === "" || (check > from && check < to))
}

function validateGenre(genre, videoGenre){
  return genre !== "" && genre !== videoGenre
}
function validateCountry(country, videoCountry){
  return country !== "" && country !== videoCountry
}

  return (
      <Container fluid className="body">
          <Header/>
          <SearchBar data={movies}/>
          <Row noGutters>
          {movies.filter((val) => {
            if(validateFilters(val))
            {
              return val
            }
            }).map((data) => (
            <Col xs={5} lg={3} className="mb-5" key={data._id}>
              <Video data={data}/>
            </Col>
          ))}
          </Row>
      </Container>
  );
}
