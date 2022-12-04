import { useNavigate } from "react-router-dom";
import paths from "../routes/paths";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";

export function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <button onClick={() => navigate(paths.startViewPath)}>Start</button>
            <button onClick={() => navigate(paths.temperaturViewPath)}>Temperatur</button>
            <button onClick={() => navigate(paths.quizViewPath)}>Quiz</button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
