import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MyCart() {
  const navigate = useNavigate();

  // This button takes user to normal booking page
  const handleAddBooking = () => {
    navigate("/booking");
  };

  // Sample booking list (replace with real data later)
  const bookings = [];

  return (
    <Container className="mt-5 text-white">
      {/* Top Section with Title and Button */}
      <Row className="align-items-center mb-4">
        <Col>
          <h2 className="text-warning">My Bookings</h2>
        </Col>
        <Col className="text-end">
          <Button variant="success" onClick={handleAddBooking}>
            + Add Booking
          </Button>
        </Col>
      </Row>

      {/* Booking Display */}
      {bookings.length === 0 ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "50vh",
            backdropFilter: "blur(5px)",
            opacity: 0.7,
          }}
        >
          <h3>No bookings yet</h3>
        </div>
      ) : (
        <Row>
          {bookings.map((b, i) => (
            <Col md={4} key={i} className="mb-3">
              <Card className="p-3 shadow bg-dark text-white">
                <h5>{b.car}</h5>
                <p>{b.price}</p>
                <p>{b.pickup} → {b.drop}</p>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default MyCart;
