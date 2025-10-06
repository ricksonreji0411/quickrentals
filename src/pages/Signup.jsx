import React, { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert("Please fill all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      alert("User already exists! Please login.");
      navigate("/login");
      return;
    }

    const newUser = {
      userId: Date.now(),
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please login.");
    navigate("/login");
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
          <h3 className="text-center text-warning mb-4">Create Account</h3>
          <Form onSubmit={handleSignup}>
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

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="warning" type="submit" className="w-100 mb-3">
              Sign Up
            </Button>

            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-warning fw-bold">
                Login
              </Link>
            </p>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default Signup;
