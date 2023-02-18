import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { HomeCard } from "./HomeCard";

export const Home = (props) => {
  const [palermo, setPalermo] = useState(null);
  const [london, setLondon] = useState();
  const [tokyo, setTokyo] = useState();
  const [newYork, setNewYork] = useState();

  const [timeImg, setTimeImg] = useState();
  const [time, setTime] = useState();

  const popularCities = [
    "lat=38.1112268&lon=13.3524434",
    "lat=51.5073219&lon=-0.1276474",
    "lat=34.6937569&lon=135.5014539",
    "lat=40.7127281&lon=-74.0060152",
  ];
  const baseURL = "https://api.openweathermap.org/data/2.5/";
  useEffect(() => {
    props.fetchFunction(baseURL, "weather", popularCities[0], setPalermo);
    props.fetchFunction(baseURL, "weather", popularCities[1], setLondon);
    props.fetchFunction(baseURL, "weather", popularCities[2], setTokyo);
    props.fetchFunction(baseURL, "weather", popularCities[3], setNewYork);
  }, []);

  /*  useEffect(() => {
    console.log(palermo[0]);
  }, [palermo]); */

  useEffect(() => {
    props.timeImgFunction(palermo, time, setTime, setTimeImg);
  }, [palermo, london, tokyo, newYork]);

  return (
    <Container className="mb-5">
      <h1 className="text-center my-3 mt-5">
        Our most commonly searched cities
      </h1>
      <Row className="justify-content-between">
        {palermo ? (
          <HomeCard imgUrl={timeImg} city={palermo} time={time} />
        ) : (
          <div className="mx-auto text-center my-5">
            <Spinner animation="border" variant="light" />
          </div>
        )}
        {london ? (
          <HomeCard imgUrl={timeImg} city={london} time={time} />
        ) : (
          <div className="mx-auto text-center my-5">
            <Spinner animation="border" variant="light" />
          </div>
        )}
        {tokyo ? (
          <HomeCard imgUrl={timeImg} city={tokyo} time={time} />
        ) : (
          <div className="mx-auto text-center my-5">
            <Spinner animation="border" variant="light" />
          </div>
        )}
        {newYork ? (
          <HomeCard imgUrl={timeImg} city={newYork} time={time} />
        ) : (
          <div className="mx-auto text-center my-5">
            <Spinner animation="border" variant="light" />
          </div>
        )}
      </Row>
    </Container>
  );
};
