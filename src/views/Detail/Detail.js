import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import "./Detail.css";
import axios from "axios";

export default function Detail() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get(
          "https://plep.herokuapp.com/api/movies"
        );
        console.log(data);
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies().catch(null);
  }, []);
  return (
    <Container fluid className="body">
      <Row noGutters>
        <Col lg={8} md={12}>
          <VideoInfo data={movies[3]}/>
        </Col>
        <Col lg={4} md={12} className="mb-4">
          {movies.map((data) => (
            <Video data={data} key={data._id}/>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
