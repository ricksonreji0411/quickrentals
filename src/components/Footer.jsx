import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>QuickRental</h5>
            <p>Your trusted partner for car rentals. Luxury, affordable, and offroad vehicles at your fingertips.</p>
          </Col>
          <Col md={3}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/our-fleet" className="text-white text-decoration-none">Our Fleet</a></li>
              <li><a href="/booking" className="text-white text-decoration-none">Booking</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Contact Us</h6>
            <p>Email: info@Quickrental.com</p>
            <p>Phone: +91 9876543210</p>
          </Col>
        </Row>
        <hr className="bg-white"/>
        <p className="text-center mb-0">&copy; 2025 QuickRental. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
