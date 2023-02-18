import { Container, Navbar } from "react-bootstrap";

export const CustomFooter = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Navbar fixed="bottom">
      <Container className="text-light justify-content-center">
        <span className="py-2">
          &copy; {year} All Rights Reserved. Doge Ltd
        </span>
      </Container>
    </Navbar>
  );
};
