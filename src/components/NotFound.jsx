import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container className="text-center mt-5 text-light">
      <h1>404 - Not found</h1>
      <h2 className="py-3">
        Woah, careful there, you almost fell off the matrix!
      </h2>
      <Button variant="success" className="fs-4" onClick={() => navigate("/")}>
        Take me back to safety
      </Button>
    </Container>
  );
};
