import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={6}>
            <h5>QuickRental</h5>
            <p>Your trusted partner for car rentals. Luxury, affordable, and offroad vehicles at your fingertips.</p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/home" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/ourfleet" className="text-white text-decoration-none">Our Fleet</Link></li>
              <li><Link to="/booking" className="text-white text-decoration-none">Booking</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h6>Contact Us</h6>
            <p>Email: info@QuickRental.com</p>
            <p>Phone: +91 9876543210</p>
          </Col>
        </Row>

        <hr className="bg-white" />

        <p className="text-center mb-0">&copy; 2025 QuickRental. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
