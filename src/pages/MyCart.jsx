import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MyCart() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  // Load all saved bookings from localStorage
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  // Navigate to Booking page
  const handleAddBooking = () => {
    navigate("/booking");
  };

  // Delete booking
  const handleDelete = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <Container className="mt-5 text-white">
      {/* Header Section */}
      <Row className="align-items-center mb-4">
        <Col>
          <h2 className="text-warning fw-bold">My Bookings</h2>
        </Col>
        <Col className="text-end">
          <Button variant="success" onClick={handleAddBooking}>
            + Add Booking
          </Button>
        </Col>
      </Row>

      {/* Booking List */}
      {bookings.length === 0 ? (
        <div
          className="d-flex justify-content-center align-items-center flex-column"
          style={{
            height: "50vh",
            backdropFilter: "blur(4px)",
            opacity: 0.8,
          }}
        >
          <h3 className="text-dark">No bookings yet</h3>
         
        </div>
      ) : (
        <Row>
          {bookings.map((b, i) => (
            <Col md={4} sm={6} key={i} className="mb-4">
              <Card className="p-3 bg-light text-black shadow-lg border border-secondary">
                <Card.Body>
                  <h5 className="text-warning mb-2">{b.car}</h5>
                  <p><strong>Price:</strong> {b.price}</p>
                  <p><strong>From:</strong> {b.pickup}</p>
                  <p><strong>To:</strong> {b.drop}</p>
                  {b.date && <p><strong>Date:</strong> {b.date}</p>}
                  <div className="text-end">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(i)}
                    >
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default MyCart;
