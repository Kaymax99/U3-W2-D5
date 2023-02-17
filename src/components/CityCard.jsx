import { Button, Col, Row } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const CityCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row
      className="mx-1 mb-2 p-3 align-items-center"
      style={{
        border: "1px solid #00000033",
        borderRadius: 5,
        backgroundColor: "white",
      }}
    >
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
