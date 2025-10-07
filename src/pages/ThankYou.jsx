import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state;

  if (!booking) {
    return (
      <Container className="mt-5 text-center">
        <h3>No booking details found!</h3>
      </Container>
    );
  }

  const handleBackHome = () => {
    navigate("/home");
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card
        style={{ width: "32rem" }}
        className="p-4 text-center shadow"
      >
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

        {/* ✅ Back to Home Button */}
        <div className="text-center mt-4">
          <Button variant=" " onClick={handleBackHome}>
            ← Back to Home
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default ThankYou;
