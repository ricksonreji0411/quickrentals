import React, { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      setUser(user); // ✅ trigger re-render instantly
      navigate("/home");
    } else {
      alert("Invalid email or password. Please try again!");
    }
  };

  return (
    <div className="login-bg d-flex justify-content-center align-items-center vh-100">
      <Container className="d-flex justify-content-center">
        <Card
          style={{
            width: "25rem",
            padding: "2rem",
            background: "rgba(0, 0, 0, 0.7)",
            color: "white",
            borderRadius: "15px",
            boxShadow: "0 0 25px rgba(0,0,0,0.5)",
          }}
        >
          <h3 className="text-center text-warning mb-4">Welcome to QuickRental</h3>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="warning" type="submit" className="w-100 mb-3">
              Login
            </Button>

            <p className="text-center">
              New user?{" "}
              <Link to="/signup" className="text-warning fw-bold">
                Sign Up
              </Link>
            </p>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
