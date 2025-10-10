import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function AppNavbar() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // Close menu when route changes
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
      className="px-3"
    >
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <Navbar.Brand
          as={Link}
          to="/home"
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: "1.4rem",
          }}
        >
          QuickRental
        </Navbar.Brand>

        {/* Right: Toggle Button */}
        <div className="d-flex align-items-center">
          <Navbar.Toggle
            aria-controls="navbar-menu"
            onClick={() => setExpanded(expanded ? false : true)}
          />
        </div>
      </Container>

      {/* Collapsible Menu */}
      <Navbar.Collapse id="navbar-menu" className="bg-dark">
        <Nav className="text-center">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/ourfleet">Our Fleet</Nav.Link>
          {user && <Nav.Link as={Link} to="/MyCart">My Bookings</Nav.Link>}
          <Nav.Link as={Link} to="/account">Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
