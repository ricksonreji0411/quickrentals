import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function OurFleet() {
  const navigate = useNavigate();

  const allCars = [
     {
      name: "Ford Mustang ", category: "Coupe", fuel: "Petrol", price: "₹4500/day",
      img:"https://prezentokracja.pl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/o/ford-mustang-gt-jazda-za-kierownica-mustanga_1.jpg",
      seats: "4", transmission: "Automatic", topSpeed: "250 km/h", color: "Red"

    },
    {
      name:"Mercedes C-Class", category: "Sedan", fuel: "Diesel", price: "₹5500/day",
      img:"https://auto.hindustantimes.com/htmobile1/mercedesbenz_cclass2022/images/exterior_mercedes-benz-c-class-2022_front-left-view_600x400.jpg?imwidth=420",
      seats: "5", transmission: "Automatic", topSpeed: "240 km/h", color: "Black"
    },
    {
      name:"Mercedes GWagon", category: "SUV", fuel: "Petrol", price: "₹12000/day",
      img:"https://miro.medium.com/v2/resize:fit:1200/1*hxp31ZGIrInMEBUiz2ZdvA.jpeg",
      seats: "5", transmission: "Automatic", topSpeed: "210 km/h", color: "Black"
    },{
    name:"BMW m3", category: "Sedan", fuel: "Petrol", price: "₹8000/day",
    img:"https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-110-66562ddceaf59.jpg",
    seats: "5", transmission: "Automatic", topSpeed: "290 km/h", color: "Green"
    },
    {
      name:"BMW m5", category: "Sedan", fuel: "Petrol", price: "₹9000/day",
      img:"https://bmwindia.co.in/offers/m5/images/header-mob.jpg",
      seats: "5", transmission: "Automatic", topSpeed: "305 km/h", color: "Black"
    },

    {
      name:"Volkswagen Polo", category: "HatchBack", fuel: "Petrol", price: "₹3500/day",
      img:"https://wallpapercat.com/w/full/6/d/c/1694716-3840x2160-desktop-4k-volkswagen-polo-wallpaper-image.jpg",
      seats: "5", transmission: "Manual", topSpeed: "190 km/h", color: "White"
    },
    {
     name:"Jeep Wrangler", category: "SUV", fuel: "Petrol", price: "₹6500/day",
     img:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Jeep/Wrangler/11675/1714043545186/front-left-side-47.jpg",
     seats: "5", transmission: "Manual", topSpeed: "180 km/h", color: "Red"
    },
      
  
    { 
      name: "Tesla Model 3", category: "Sedan", fuel: "EV", price: "₹5000/day",
      img: "https://img.autocarindia.com/News/20230901023724_Tesla.png?w=700&c=0",
      seats: "5", transmission: "", topSpeed: "225 km/h", color: "red"
    },
    { 
      name: "BMW X5", category: "SUV", fuel: "Diesel", price: "₹7000/day",
      img: "https://www.bmw.in/content/dam/bmw/common/all-models/x-series/x5/2023/highlights/bmw-x-series-x5-sp-desktop.jpg",
      seats: "5", transmission: "Automatic", topSpeed: "230 km/h", color: "silver"
    },
    { 
      name: "Audi A6", category: "Sedan", fuel: "Petrol", price: "₹6000/day",
      img: "https://hips.hearstapps.com/hmg-prod/images/2024-audi-a6-106-64761a1a30f1d.jpg?crop=0.598xw:0.468xh;0.109xw,0.334xh&resize=2048:*",
      seats: "5", transmission: "Automatic", topSpeed: "250 km/h", color: "Silver"
    },  { 
      name: "Toyota Hilux", category: "Truck", fuel: "Petrol", price: "₹6000/day",
      img: "https://www.toyota.com.my/content/dam/malaysia/models/hilux/overview/toyota-my-hilux-overview-1200x1200.jpg",
      seats: "5", transmission: "Manual", topSpeed: "175 km/h", color: "Copper Brown"
    },
    {
      name:"Ford F-150", category: "Truck", fuel: "Diesel", price: "₹7500/day",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNVd0Zh1qq_RqzxTktyRDpHtgzSKGEfDJFA&s",
      seats: "5", transmission: "Automatic", topSpeed: "180 km/h", color: "Black"
    },
    {
      name:"Mahindra Thar Roxx", category: "SUV", fuel: "Petrol", price: "₹6000/day",
      img:"https://imgd.aeplcdn.com/642x361/n/cw/ec/184631/mahindra-thar-roxx-left-front-three-quarter5.jpeg?isig=0&wm=1&q=75",
      seats: "4", transmission: "Manual", topSpeed: "160 km/h", color: "Black"
    },
   
    { 
      name: "Mahindra Thar ", category: "SUV", fuel: "Diesel", price: "₹5500/day",
      img: "https://images.livemint.com/img/2022/09/01/1600x900/Mahindrathar_1604486465203_1604486476898_1662008266520_1662008266520.jpg",
      seats: "4", transmission: "Manual", topSpeed: "155 km/h", color: "Red"
    },
    {
      name: "Hyundai Creta", category: "SUV", fuel: "Petrol", price: "₹4000/day",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-01/the-new-hyundai-creta-1_0.jpg?VersionId=BiYnDLcEG3uEzxvrpjcn6GJw6Khgptx7&size=750:*",
      seats: "5", transmission: "Automatic", topSpeed: "190 km/h", color: "Black"
    },
  
   
    {
      name: "Maruti Suzuki Swift", category: "HatchBack", fuel: "Petrol", price: "₹3000/day",
      img: "https://i.bstr.es/drivingeco/2020/09/nuevo-suzuki-Swift-3.jpg",
      seats: "5", transmission: "Automatic", topSpeed: "180 km/h", color: "Red"
    } ,
    { 
      name: "Maruti WagonR CNG", category: "HatchBack", fuel: "CNG", price: "₹2500/day",
      img: "https://www.autovista.in/assets/img/new_cars_colour_variants/new-wagonR-colour-superior-white.jpg",
      seats: "5", transmission: "Manual", topSpeed: "150 km/h", color: "White"
    }
  ];

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [fuelFilter, setFuelFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = allCars.filter((car) => {
    const categoryMatch = categoryFilter === "All" || car.category === categoryFilter;
    const fuelMatch = fuelFilter === "All" || car.fuel === fuelFilter;
    const searchMatch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && fuelMatch && searchMatch;
  });

  const handleRentNow = (car) => {
    navigate("/cardetails", { state: car });
  };

  return (
    <Container className="mt-4">
      <h2 className="fw-bold mb-4">Our Fleet</h2>

      {/* Filters and Search Row */}
      <Row className="mb-4 gy-3">
        <Col md={4}>
          <Form.Group controlId="categorySelect">
            <Form.Label><b>Filter by Category</b></Form.Label>
            <Form.Select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="HatchBack">HatchBack</option>
              <option value="Truck">Truck</option>
              <option value="Coupe">Coupe</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4}>
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

        {/*  Search by Car Name */}
        <Col md={4}>
          <Form.Group controlId="searchCar">
            <Form.Label><b>Search by Car Name</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter car name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Cars Display */}
      <Row>
        {filteredCars.length > 0 ? (
          filteredCars.map((car, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="shadow-sm">
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
          ))
        ) : (
          <Col className="text-center mt-5">
            <h5>No cars found matching your search.</h5>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default OurFleet;
