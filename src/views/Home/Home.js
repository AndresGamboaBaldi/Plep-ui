import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/Video/Video";
import "./Home.css";
import axios from "axios";

export default function Home() {
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
          {movies.map((data) => (
            <Col xs={6} lg={3} className="mb-5" key={data._id}>
              <Video data={data}/>
            </Col>
          ))}
          </Row>
      </Container>
  );
}
