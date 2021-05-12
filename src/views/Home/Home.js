import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/Video/Video";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import axios from "axios";
import UserStore from "../../Store/UserData.js"
import { useHistory } from "react-router-dom";

export default function Home() {

let history = useHistory();

const isLoggedIn = UserStore(state => state.isLoggedIn);

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
}, [movies]);

const loadFailed = () => {
  history.push("/");
};

const location = useLocation();

useEffect(() => {
  const passedFilters = location.state ? location.state.filters : {};
  setFilters(passedFilters);
}, [location]);

function validateFilters (video) {
  if(typeof filters === 'undefined'){
    return true
  } else if (validateSearchTerm(filters.searchTerm, video.title)){
    return false
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
  var from = new Date(d1[0], parseInt(d1[1])-1, d1[2]);  
  var to   = new Date(d2[0], parseInt(d2[1])-1, d2[2]);
  var check = new Date(c[0], parseInt(c[1]-1), c[2]);
  return !(startDate === "" || endDate === "" || (check > from && check < to))
}

function validateGenre(genre, videoGenre){
  return genre !== "" && genre !== videoGenre
}
function validateCountry(country, videoCountry){
  return country !== "" && country !== videoCountry
}
function validateSearchTerm(searchTerm, videoTitle){
  //console.log(searchTerm);
  return searchTerm !== "" && !videoTitle.toLowerCase().includes(searchTerm.toLowerCase())
}

  if(isLoggedIn){
    return (
      <Container fluid className="body">
          <Header/>
          <SearchBar data={movies}/>
          <Row noGutters>
          {movies.filter((val) => 
            validateFilters(val)
            ).map((data) => (
            <Col xs={6} lg={3} className="mb-5" key={data._id}>
              <Video data={data}/>
            </Col>
          ))}
          </Row>
      </Container>
  );
  }

  return(<body onLoad={loadFailed()}></body>);
  
}
