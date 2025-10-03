import { Container, Carousel } from "react-bootstrap";

function Home() {
  return (
    <div>
      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.motortrend.com/uploads/sites/5/2020/11/2021-Mercedes-Benz-E-Class-2021-MotorTrend-Car-of-the-Year-1.jpg"
            alt="First slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Luxury Cars</h3>
            <p>Experience comfort and performance with premium rentals.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/nexa-banner.webp"
            alt="Second slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Affordable Rentals</h3>
            <p>Choose from a wide range of budget-friendly options.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgd.aeplcdn.com/642x361/n/cw/ec/164857/maruti-suzuki-jimny-right-front-three-quarter94.jpeg?isig=0&wm=1&q=75"
            alt="Third slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Adventure Ready</h3>
            <p>Book SUVs and off-road vehicles for your next trip.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Welcome Section */}
      <Container className="text-center mt-5">
        <h2 className="display-4 fw-bold">Welcome to QuickRental</h2>
        <p className="lead mt-3">Rent your dream car easily and quickly!</p>
      </Container>
    </div>
  );
}

export default Home;
