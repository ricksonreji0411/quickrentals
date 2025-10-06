import React, { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Account({ setUser }) {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/login", { replace: true });
  }, [user, navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null); // ✅ instantly clear user from App
    navigate("/login", { replace: true });
  };

  if (!user) return null;

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card
        style={{
          width: "28rem",
          background: "rgba(0, 0, 0, 0.85)",
          color: "white",
          padding: "2rem",
          borderRadius: "15px",
          boxShadow: "0 0 25px rgba(0,0,0,0.6)",
        }}
      >
        <h3 className="text-warning text-center mb-3">My Account</h3>
        <p><b>User ID:</b> {user.userId}</p>
        <p><b>Email:</b> {user.email}</p>

        <div className="text-center mt-4">
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default Account;
