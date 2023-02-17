import { Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { CityCard } from "./CityCard";

export const Search = (props) => {
  const [queryParam, setQueryParam] = useState("");
  const [cities, setCities] = useState(null);

  const baseURL = "http://api.openweathermap.org/geo/1.0/";

  /*     direct?&units=metric&limit=5&appid=6f7b75831402626eb36d5abd608f5d51&q="
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchFunction(baseURL, "direct", "&q=" + queryParam, setCities);
  };

  useEffect(() => {
    console.log(cities);
  }, [cities]);

  const handleChange = (e) => {
    setQueryParam(e.target.value);
  };

  return (
    <Container>
      <Row className="d-flex align-items-center my-3">
        <Col xs={11}>
          <h1 className="text-center mb-0">Search a City</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={queryParam}
              onChange={handleChange}
              placeholder="Type a city name and press Enter"
            />
          </Form>
        </Col>
      </Row>
      {cities ? (
        <Container className="px-1 mt-2 whiteBg">
          <Col xs={12} className="searchList rounded-bottom">
            {cities.map((cities, i) => (
              <CityCard key={i} data={cities} />
            ))}
          </Col>
        </Container>
      ) : (
        <Container className="px-1 py-2 mt-2 whiteBg">
          <Col xs={12} className="searchList rounded-bottom text-center">
            <h1 className="text-dark">
              Sorry, could not find specified city :c
            </h1>
            <p>Check your spelling and try again</p>
          </Col>
        </Container>
      )}
    </Container>
  );
};
