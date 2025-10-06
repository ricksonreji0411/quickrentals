import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function AppNavbar() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // Close the menu whenever the route changes
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand={false}
      collapseOnSelect
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
    >
      <Container>
        {/* Left: Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: "1.4rem",
          }}
        >
          QuickRental
        </Navbar.Brand>

        {/* Right: Toggle Button */}
        <Navbar.Toggle
          aria-controls="navbar-menu"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        {/* Collapsible Menu */}
        <Navbar.Collapse id="navbar-menu" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/ourfleet">Our Fleet</Nav.Link>
            {user && <Nav.Link as={Link} to="/booking">Booking</Nav.Link>}
            <Nav.Link as={Link} to="/account">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
