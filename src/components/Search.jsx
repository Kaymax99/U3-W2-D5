import { Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { CityCard } from "./CityCard";

export const Search = (props) => {
  const [queryParam, setQueryParam] = useState("");
  const [cities, setCities] = useState(null);

  const baseURL =
    "http://api.openweathermap.org/geo/1.0/direct?&units=metric&limit=5&appid=6f7b75831402626eb36d5abd608f5d51&q=";

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchFunction(baseURL, queryParam, setCities);
  };

  /*   useEffect(() => {
    console.log(cities);
  }, [cities]); */

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
        <Container>
          <Row className="mt-1">
            <Col xs={12}>
              <Row className="mx-1 mt-2 p-1">
                <Col xs={6}>
                  <h4>City:</h4>
                </Col>
                <Col className="text-center" xs={4}>
                  <h4 className="m-0">State:</h4>
                </Col>
                <Col className="text-center" xs={2}>
                  <h4>Country:</h4>
                </Col>
              </Row>
            </Col>
          </Row>
          <Col xs={12}>
            {cities.map((cities, i) => (
              <CityCard key={i} data={cities} />
            ))}
          </Col>
        </Container>
      ) : (
        <></>
      )}
    </Container>
  );
};
