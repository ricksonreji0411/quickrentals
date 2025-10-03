import { Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function ThankYou() {
  const location = useLocation();
  const booking = location.state; 

  if (!booking) {
    return (
      <Container className="text-center mt-5">
        <h2>No Booking Found!</h2>
        <Link to="/browse">
          <Button variant="primary" className="mt-3">Browse Cars</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="text-center mt-5">
      <h2 className="fw-bold">Thank You, {booking.name}!</h2>
      <p className="lead mt-3">
        Your booking for <b>{booking.car}</b> from <b>{booking.startDate}</b> to <b>{booking.endDate}</b> is confirmed. 
      </p>
      <Link to="/browse">
        <Button variant="success" className="mt-3">Back to Browse Cars</Button>
      </Link>
    </Container>
  );
}

export default ThankYou;
