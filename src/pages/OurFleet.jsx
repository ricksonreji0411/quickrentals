import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function OurFleet() {
  const allCars = [
    { name: "Tesla Model 3", category: "Luxury", fuel: "EV", price: "₹5000/day", img: "https://tesla-cdn.thron.com/delivery/public/image/tesla/8ffbb902-73a9-46c4-93f6-65f2349c0456/bvlatuR/std/2880x1800/Desktop-Model3" },
    { name: "BMW X5", category: "Luxury", fuel: "Diesel", price: "₹7000/day", img: "https://www.bmwusa.com/content/dam/bmwusa/X5/2021/overview/BMW-MY21-G05-X5-Overview-01.jpg" },
    { name: "Audi A6", category: "Luxury", fuel: "Petrol", price: "₹6000/day", img: "https://www.audi.in/content/dam/nemo/models/a6/a6-limo/my-2021/1920x1080-gallery/1920x1080_AA6_L_181010.jpg" },
    { name: "Maruti WagonR CNG", category: "Affordable", fuel: "CNG", price: "₹2500/day", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/115803/wagon-r-exterior-right-front-three-quarter.jpeg" },
    { name: "Mahindra Thar", category: "Offroad", fuel: "Diesel", price: "₹5500/day", img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/121992/thar-exterior-right-front-three-quarter.jpeg" },
  ];

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [fuelFilter, setFuelFilter] = useState("All");

  const filteredCars = allCars.filter((car) => {
    const categoryMatch = categoryFilter === "All" || car.category === categoryFilter;
    const fuelMatch = fuelFilter === "All" || car.fuel === fuelFilter;
    return categoryMatch && fuelMatch;
  });

  return (
    <Container className="mt-4">
      <h2 className="fw-bold mb-4">Our Fleet</h2>

      {/* Filters */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group controlId="categorySelect">
            <Form.Label><b>Filter by Category</b></Form.Label>
            <Form.Select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Luxury">Luxury</option>
              <option value="Affordable">Affordable</option>
              <option value="Offroad">Offroad</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="fuelSelect">
            <Form.Label><b>Filter by Fuel Type</b></Form.Label>
            <Form.Select value={fuelFilter} onChange={(e) => setFuelFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="EV">EV</option>
              <option value="Petrol">Petrol</option>
              <option value="CNG">CNG</option>
              <option value="Diesel">Diesel</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Cars Display */}
      <Row>
        {filteredCars.map((car, i) => (
          <Col md={4} key={i} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={car.img}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>
                  <b>Category:</b> {car.category} <br />
                  <b>Fuel:</b> {car.fuel} <br />
                  <b>Price:</b> {car.price}
                </Card.Text>
                <Button variant="success">Rent Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OurFleet;
