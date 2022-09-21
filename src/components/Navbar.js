import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../logic/auth-context";
import { useSelector } from "react-redux";

function BasicExample() {
  const ctx = useContext(AuthContext);
  const count = useSelector((store) => store.count);
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">〶 TICKET SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} onClick={ctx.logout} to="/login">
              Logout
            </Nav.Link>
            <Nav.Link as={Link} to="/home" href="#home">
              Biglietti
            </Nav.Link>
            <Nav.Link as={Link} to="/carrello" href="#carrello">
              Carrello ({count})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
