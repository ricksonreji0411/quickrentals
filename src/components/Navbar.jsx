import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
       
        <Navbar.Brand as={Link} to="/"> QuickRental</Navbar.Brand>
        
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
           <Nav.Link href="/our-fleet">Our Fleet</Nav.Link>

            <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
