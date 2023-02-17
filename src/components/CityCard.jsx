import { Button, Col, Row } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const CityCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row className="p-2 mx-0 align-items-center custCard">
      <Col xs={4}>
        <Link to={`/details/lat=${data.lat}&lon=${data.lon}`}>{data.name}</Link>
      </Col>
      <Col xs={2}>
        <Button
          onClick={() => {
            dispatch({
              type: "ADD_TO_FAV",
              payload: [data.name, data.state, data.lat, data.lon],
            });
          }}
        >
          <Heart />
        </Button>
      </Col>
      <Col className="text-center" xs={4}>
        {data.state}
      </Col>
      <Col className="text-center" xs={2}>
        {data.country}
      </Col>
    </Row>
  );
};
