import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCar = location.state || null;

  // List of cars (so user can pick one if they didn’t come from CarDetails)
  const allCars = [
    { name: "Tesla Model 3", price: "₹5000/day" },
    { name: "BMW X5", price: "₹7000/day" },
    { name: "Audi A6", price: "₹6000/day" },
    { name: "Maruti WagonR CNG", price: "₹2500/day" },
    { name: "Mahindra Thar", price: "₹5500/day" },
    { name: "Toyota Hilux", price: "₹6000/day" },
  ];

  const [formData, setFormData] = useState({
    car: selectedCar ? selectedCar.name : "",
    price: selectedCar ? selectedCar.price : "",
    name: "",
    email: "",
    phone: "",
    pickup: "",
    drop: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCarSelect = (e) => {
    const carName = e.target.value;
    const car = allCars.find((c) => c.name === carName);
    setFormData({
      ...formData,
      car: car.name,
      price: car.price,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thankyou", { state: formData });
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "32rem" }} className="p-4 shadow">
        <h3 className="text-center mb-4">Car Booking Form</h3>
        <Form onSubmit={handleSubmit}>
          {/* Car Selection */}
          <Form.Group className="mb-3">
            <Form.Label>Car Selected</Form.Label>
            {selectedCar ? (
              <Form.Control type="text" value={formData.car} readOnly />
            ) : (
              <Form.Select
                name="car"
                value={formData.car}
                onChange={handleCarSelect}
                required
              >
                <option value="">Select a car</option>
                {allCars.map((car, i) => (
                  <option key={i} value={car.name}>
                    {car.name} ({car.price})
                  </option>
                ))}
              </Form.Select>
            )}
          </Form.Group>

          {/* Read-only Price */}
          {formData.car && (
            <Form.Group className="mb-3">
              <Form.Label>Price per Day</Form.Label>
              <Form.Control type="text" value={formData.price} readOnly />
            </Form.Group>
          )}

          {/* User Info */}
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Pickup Date</Form.Label>
            <Form.Control
              type="date"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Return Date</Form.Label>
            <Form.Control
              type="date"
              name="drop"
              value={formData.drop}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-center mt-4">
            <Button variant="success" type="submit">
              Confirm Booking
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Booking;
