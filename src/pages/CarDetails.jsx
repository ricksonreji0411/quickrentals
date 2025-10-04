import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button, ListGroup } from "react-bootstrap";

function CarDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state;

  if (!car) {
    return <h3 className="text-center mt-5">No car details available</h3>;
  }

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "32rem" }}>
        <Card.Img 
          variant="top" 
          src={car.img} 
          style={{ height: "250px", objectFit: "cover" }} 
        />
        <Card.Body>
          <Card.Title className="fw-bold">{car.name}</Card.Title>
          <Card.Text>
            <b>Category:</b> {car.category} <br />
            <b>Fuel:</b> {car.fuel} <br />
            <b>Price:</b> {car.price}
          </Card.Text>

          {/* Extra Features */}
          <h5 className="mt-3">Car Features</h5>
          <ListGroup variant="flush">
            <ListGroup.Item><b>Seats:</b> {car.seats}</ListGroup.Item>
            <ListGroup.Item><b>Transmission:</b> {car.transmission}</ListGroup.Item>
            <ListGroup.Item><b>Top Speed:</b> {car.topSpeed}</ListGroup.Item>
            <ListGroup.Item><b>Color:</b> {car.color}</ListGroup.Item>
          </ListGroup>

          <div className="mt-4 d-flex justify-content-between">
            
            <Button variant="primary" onClick={() => navigate("/booking", { state: car })}>
              Proceed to Booking
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CarDetails;
