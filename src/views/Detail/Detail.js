import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Detail.css";
import axios from "axios";
import UserStore from "../../Store/UserData.js";
import { useHistory } from "react-router-dom";

export default function Detail() {
  let history = useHistory();

  const user = UserStore((state) => state.user);
  const email = UserStore((state) => state.user);
  const isLoggedIn = UserStore((state) => state.isLoggedIn);

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setMovie] = useState({});
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
    const passedMovie = location.state ? location.state.video : {};
    setMovie(passedMovie);
  }, [location]);

  const loadFailed = () => {
    history.push("/");
  };
  if(isLoggedIn){
    return (
      <Container fluid className="body">
        <Header />
        <SearchBar data={movies} />
        <Row noGutters>
          <Col lg={8} md={12}>
            <VideoInfo data={selectedMovie} />
          </Col>
          <Col lg={4} md={12} className="mb-4">
            {movies.map((data) => (
              <Video data={data} key={data._id} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
  return(<body onLoad={loadFailed()}></body>)
  
}
