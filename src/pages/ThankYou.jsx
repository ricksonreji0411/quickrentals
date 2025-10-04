import { useLocation } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

function ThankYou() {
  const location = useLocation();
  const booking = location.state;

  if (!booking) {
    return (
      <Container className="mt-5 text-center">
        <h3>No booking details found!</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "32rem" }} className="p-4 text-center shadow">
        <h2 className="text-success mb-3">Thank You!</h2>
        <p>Your booking has been confirmed successfully 🎉</p>

        <h5 className="mt-4">Booking Summary</h5>
        <p>
          <b>Car:</b> {booking.car} <br />
          <b>Price:</b> {booking.price} <br />
          <b>Name:</b> {booking.name} <br />
          <b>Email:</b> {booking.email} <br />
          <b>Phone:</b> {booking.phone} <br />
          <b>Pickup Date:</b> {booking.pickup} <br />
          <b>Return Date:</b> {booking.drop}
        </p>
      </Card>
    </Container>
  );
}

export default ThankYou;
