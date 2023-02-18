import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomeCard = ({ imgUrl, city, time }) => {
  /* console.log(imgUrl);
    console.log(time); */
  console.log(city);
  return (
    <Col
      xs={5}
      className="whiteBg my-5 text-light"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Row>
        <Col
          xs={12}
          className="py-2 rounded-top"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <span className="fw-bold fs-4">
            <Link to={`/details/lat=${city.coord.lat}&lon=${city.coord.lon}`}>
              {city.name}, {city.sys.country}
            </Link>
          </span>{" "}
          <span className="fw-normal fs-5">at {time} GMT</span>
        </Col>
        <Row className="align-items-center">
          <Col xs={6} className="py-3">
            <Col xs={12}>
              <span className="fs-1 fw-bold">
                {Math.round(city.main.feels_like)}°C
              </span>
            </Col>
            <Col xs={12}>
              <span className="fs-5">{city.weather[0].main}</span>
            </Col>
          </Col>
          <Col xs={6} className="text-end">
            <img
              src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
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
            Day {Math.round(city.main.temp_max)}° - Night{" "}
            {Math.round(city.main.temp_min)}°
          </span>
        </Col>
      </Row>
    </Col>
  );
};
