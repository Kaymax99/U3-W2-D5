import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Heartbreak } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const Favourites = () => {
  const favContent = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
  /* console.log(favContent); */

  return (
    <Container>
      <h1 className="text-center my-3">Your Favourite Cities</h1>
      {favContent.map((city, i) => (
        <Row
          className="p-3 my-1 align-items-center"
          xs={12}
          key={i}
          style={{
            border: "1px solid #00000033",
            borderRadius: 5,
            backgroundColor: "white",
          }}
        >
          <Col xs={2} className="ps-0">
            <Button
              className="mr-2"
              variant="danger"
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_FAV", payload: i });
              }}
            >
              <Heartbreak />
            </Button>
          </Col>
          <Col className="text-center" xs={5}>
            <Link to={`/details/lat=${city[2]}&lon=${city[3]}`}>{city[0]}</Link>
          </Col>
          <Col className="text-center" xs={5}>
            {city[1]}
          </Col>
        </Row>
      ))}
    </Container>
  );
};
