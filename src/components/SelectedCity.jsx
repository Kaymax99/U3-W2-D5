import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const SelectedCity = (props) => {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();
  const params = useParams();
  /* console.log(params.cityCoords); */

  const forecastURL =
    "http://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=6f7b75831402626eb36d5abd608f5d51&";
  const currentWeatherURL =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=6f7b75831402626eb36d5abd608f5d51&";

  useEffect(() => {
    props.fetchFunction(forecastURL, params.cityCoords, setForecast);
    props.fetchFunction(
      currentWeatherURL,
      params.cityCoords,
      setCurrentWeather
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*   useEffect(() => {
    if (forecast) {
      console.log(forecast);
    }
  }, [forecast]); */

  /*   useEffect(() => {
    if (currentWeather) {
      console.log(currentWeather);
    }
  }, [currentWeather]); */

  return (
    <Container>
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
                <Col key={i} xs={12} md={6} lg={3}>
                  <Row className="text-center">
                    <Col xs={12}> {time.dt_txt.slice(11, 16)} </Col>
                    <Col xs={12}>{Math.round(time.main.feels_like) + "°C"}</Col>
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
                <div>High/Low</div>
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
                <div>Wind</div>
                <div>{currentWeather.wind.speed} km/h</div>
              </Col>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-between py-2 border-bottom border-secondary"
              >
                <div>Humidity</div>
                <div>{currentWeather.main.humidity}%</div>
              </Col>
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-between py-2 border-bottom border-secondary"
              >
                <div>Pressure</div>
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
      {currentWeather ? (
        <Row className="whiteBg my-4 py-3">
          <Col xs={12}>
            {" "}
            <h3 className="text-center">Daily Forecast</h3>
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
