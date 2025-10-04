import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Booking() {
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const cars = [
    "Tesla Model 3",
    "BMW X5",
    "Audi A6",
    "Maruti WagonR CNG",
    "Mahindra Thar",
    "Toyota Hilux"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !car || !startDate || !endDate) {
      alert("Please fill all fields!");
      return;
    }

   
    navigate("/thank-you", {
      state: { name, car, startDate, endDate }
    });
  };

  return (
    <Container className="mt-4">
      <h2 className="fw-bold mb-4">Book Your Car</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Car</Form.Label>
          <Form.Select value={car} onChange={(e) => setCar(e.target.value)}>
            <option value="">-- Select a Car --</option>
            {cars.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Book Now
        </Button>
      </Form>
    </Container>
  );
}

export default Booking;
