import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function OurFleet() {
  const navigate = useNavigate();

  const allCars = [
    { 
      name: "Tesla Model 3", category: "Luxury", fuel: "EV", price: "₹5000/day",
      img: "https://img.autocarindia.com/News/20230901023724_Tesla.png?w=700&c=0",
      seats: "5", transmission: "Automatic", topSpeed: "225 km/h", color: "White"
    },
    { 
      name: "BMW X5", category: "Luxury", fuel: "Diesel", price: "₹7000/day",
      img: "https://www.bmw.in/content/dam/bmw/common/all-models/x-series/x5/2023/highlights/bmw-x-series-x5-sp-desktop.jpg",
      seats: "5", transmission: "Automatic", topSpeed: "230 km/h", color: "Black"
    },
    { 
      name: "Audi A6", category: "Luxury", fuel: "Petrol", price: "₹6000/day",
      img: "https://hips.hearstapps.com/hmg-prod/images/2024-audi-a6-106-64761a1a30f1d.jpg?crop=0.598xw:0.468xh;0.109xw,0.334xh&resize=2048:*",
      seats: "5", transmission: "Automatic", topSpeed: "250 km/h", color: "Blue"
    },
    { 
      name: "Maruti WagonR CNG", category: "Economic", fuel: "CNG", price: "₹2500/day",
      img: "https://www.autovista.in/assets/img/new_cars_colour_variants/new-wagonR-colour-superior-white.jpg",
      seats: "5", transmission: "Manual", topSpeed: "150 km/h", color: "Silver"
    },
    { 
      name: "Mahindra Thar", category: "Offroad", fuel: "Diesel", price: "₹5500/day",
      img: "https://images.livemint.com/img/2022/09/01/1600x900/Mahindrathar_1604486465203_1604486476898_1662008266520_1662008266520.jpg",
      seats: "4", transmission: "Manual", topSpeed: "155 km/h", color: "Red"
    },
    { 
      name: "Toyota Hilux", category: "Offroad", fuel: "Petrol", price: "₹6000/day",
      img: "https://www.toyota.com.my/content/dam/malaysia/models/hilux/overview/toyota-my-hilux-overview-1200x1200.jpg",
      seats: "5", transmission: "Manual", topSpeed: "175 km/h", color: "White"
    },
  ];

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [fuelFilter, setFuelFilter] = useState("All");

  const filteredCars = allCars.filter((car) => {
    const categoryMatch = categoryFilter === "All" || car.category === categoryFilter;
    const fuelMatch = fuelFilter === "All" || car.fuel === fuelFilter;
    return categoryMatch && fuelMatch;
  });

  const handleRentNow = (car) => {
    navigate("/cardetails", { state: car });
  };

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
              <option value="Economic">Economic</option>
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
                <Button variant="success" onClick={() => handleRentNow(car)}>
                  Rent Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OurFleet;
