import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Wind, Thermometer, Droplet, ArrowDown } from "react-bootstrap-icons";
import img from "../picture.jpg";
import { current } from "@reduxjs/toolkit";

export const SelectedCity = (props) => {
  const [currentWeather, setCurrWeather] = useState();
  const [forecast, setForecast] = useState();
  const [timeImg, setTimeImg] = useState();
  const [time, setTime] = useState();

  const params = useParams();
  /* console.log(params.cityCoords); */
  const baseURL = "https://api.openweathermap.org/data/2.5/";

  /* https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key} */

  useEffect(() => {
    props.fetchFunction(baseURL, "forecast?", params.cityCoords, setForecast);
    props.fetchFunction(baseURL, "weather?", params.cityCoords, setCurrWeather);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (forecast) {
      /* console.log(forecast.list); */
    }
  }, [forecast]);

  useEffect(() => {
    if (currentWeather) {
      console.log(currentWeather);
      const date = new Date();
      const time = date.getHours();
      const mins = date.getMinutes().toString();
      setTime(time.toString() + ":" + mins);
      /* console.log(fullTime); */

      switch (true) {
        case time >= 18:
          setTimeImg(
            `"https://media.istockphoto.com/photos/deep-space-background-picture-id178149253?b=1&k=20&m=178149253&s=612x612&w=0&h=jSfVvSlCbTGZSWrso8tcllsuCSO5A_YpPLFAPEByh0w="`
          );
          break;
        case time >= 7:
          setTimeImg(
            `"https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="`
          );
          break;

        default:
          break;
      }
    }
  }, [currentWeather]);
  return (
    <Container>
      {currentWeather ? (
        <Row
          className="whiteBg my-4 text-light"
          style={{
            backgroundImage: `url(${timeImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Col
            xs={12}
            className="py-2 rounded-top"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <span className="fw-bold fs-4">
              {currentWeather.name}, {currentWeather.sys.country}
            </span>{" "}
            <span className="fw-normal fs-5">at {time} GMT</span>
          </Col>
          <Row className="align-items-center">
            <Col xs={6} className="py-3">
              <Col xs={12}>
                <span className="fs-1 fw-bold">
                  {Math.round(currentWeather.main.feels_like)}°C
                </span>
              </Col>
              <Col xs={12}>
                <span className="fs-5">{currentWeather.weather[0].main}</span>
              </Col>
            </Col>
            <Col xs={6} className="text-end">
              <img
                src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                style={{
                  backgroundColor: "rgba(255,255,255,0.6)",
                  borderRadius: "50%",
                }}
              ></img>
            </Col>
          </Row>
          <Col xs={12} className="pb-2">
            <span className="fw-bold fs-4">
              {" "}
              Day {Math.round(currentWeather.main.temp_max)}° - Night{" "}
              {Math.round(currentWeather.main.temp_min)}°
            </span>
          </Col>
        </Row>
      ) : (
        <div className="mx-auto text-center my-5">
          <Spinner animation="border" variant="light" />
        </div>
      )}
      {forecast ? (
        <Row className="whiteBg my-4 py-3">
          <Col xs={12}>
            <h3 className="text-center">
              Today's Forecast for{" "}
              <span className="fw-bold">
                {forecast.city.name}, {forecast.city.country}
              </span>
            </h3>
          </Col>
          <Col xs={12}>
            <Row>
              {forecast.list.slice(0, 4).map((time, i) => (
                <Col key={`simple-forecast-${i}`} xs={3}>
                  <Row className="text-center">
                    <Col xs={12}> {time.dt_txt.slice(11, 16)} </Col>
                    <Col xs={12} className="fw-bold">
                      {Math.round(time.main.feels_like) + "°C"}
                    </Col>
                    <Col xs={12}>
                      <img
                        src={`https://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png`}
                        alt="Weather Icon"
                      ></img>
                    </Col>
                    <Col xs={12}>{time.weather[0].main}</Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      ) : (
        <div className="mx-auto text-center my-5">
          <Spinner animation="border" variant="light" />
        </div>
      )}
      {currentWeather ? (
        <Row className="whiteBg my-4 py-3">
          <Col xs={12}>
            <h3 className="text-center">
              Current Weather in{" "}
              <span className="fw-bold">
                {currentWeather.name}, {currentWeather.sys.country}
              </span>
            </h3>
          </Col>
          <Col xs={12}>
            <Row className="text-center mb-3">
              <Col xs={12}>
                <h2 className="m-0">
                  {Math.round(currentWeather.main.feels_like)}°
                </h2>
              </Col>
              <Col xs={12}>Feels Like</Col>
            </Row>
          </Col>
          <Col xs={12}>
            <Row className="mx-1">
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-between py-2 border-bottom border-secondary"
              >
                <div>
                  <Thermometer /> High/Low
                </div>
                <div>
                  {Math.round(currentWeather.main.temp_max) + "°"}/
                  {Math.round(currentWeather.main.temp_min) + "°"}
                </div>
              </Col>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-between py-2 border-bottom border-secondary"
              >
                <div>
                  <Wind></Wind> Wind
                </div>
                <div>{currentWeather.wind.speed} km/h</div>
              </Col>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-between py-2 border-bottom border-secondary"
              >
                <div>
                  <Droplet /> Humidity
                </div>
                <div>{currentWeather.main.humidity}%</div>
              </Col>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-between py-2 border-bottom border-secondary"
              >
                <div>
                  <ArrowDown /> Pressure
                </div>
                <div>{currentWeather.main.pressure} mb</div>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <div className="mx-auto text-center my-5">
          <Spinner animation="border" variant="light" />
        </div>
      )}
      {forecast ? (
        <Row className="whiteBg my-4 py-3">
          <Col xs={12}>
            {" "}
            <h3 className="text-center">Daily Forecast</h3>
          </Col>
          <Col xs={12}>
            <Row className="justify-content-evenly">
              {forecast.list
                .filter((_, i) => i % 8 === 0)
                .map((time, i) => (
                  <Col key={`5-day-forecast-${i}`} xs={2}>
                    <Row className="text-center">
                      <Col xs={12}> {time.dt_txt.slice(6, 10)}</Col>
                      <Col xs={12}>
                        {" "}
                        {Math.round(time.main.feels_like) + "°C"}
                      </Col>
                      <Col xs={12}>
                        <img
                          src={`https://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png`}
                          alt="Weather Icon"
                        ></img>
                      </Col>
                      <Col xs={12}>{time.weather[0].main}</Col>
                    </Row>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      ) : (
        <div className="mx-auto text-center my-5">
          <Spinner animation="border" variant="light" />
        </div>
      )}
    </Container>
  );
};

// SWITCH CASE BG IN BASE AL METEO
