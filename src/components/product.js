import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from "../images/amberlogo.png";
import amberVideo from "../images/amberTechdemo.mp4"

import "../styles/home.css"; // Adjust path as needed

const Product = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Calculate the time left
  useEffect(() => {
    const countdownDate = new Date("2025-10-01T00:00:00"); // Set to a specific date
    countdownDate.setDate(countdownDate.getDate()+ 375); // 365 days from now

    const interval = setInterval(() => {
      const now = new Date();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("User email submitted:", email); // Replace with actual API call
  };

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" style={{ backgroundColor: "#00274D" }} variant="dark">
        <Container>
          <Navbar.Brand
            href="#"
            style={{ color: "#FFBF00", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            AmbER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" style={{ color: "#FFFFFF" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus" style={{ color: "#FFFFFF" }}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/individuals" style={{ color: "#FFFFFF" }}>
                In Their Memory
              </Nav.Link>
              <Nav.Link as={Link} to="/product" style={{ color: "#FFFFFF" }}>
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: "#FFFFFF" }}>
                Contact
              </Nav.Link>
            </Nav>
            <Button
              variant="warning"
              style={{
                backgroundColor: "#FFBF00",
                color: "#00274D",
                marginLeft: "20px",
                fontWeight: "bold",
              }}
              href="/product"
            >
              Pre-Order Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        {/* Video Section */}
        <Container style={{ padding: "50px 0" }}>
  <Row className="justify-content-center">
    <Col md={8} style={{ position: "relative" }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "slideIn 2s ease",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Optional shadow for better aesthetics
          borderRadius: "10px", // Rounded corners for the video
          overflow: "hidden", // Ensures video stays within the border radius
        }}
      >
        {/* Replace images with a video */}
        <video
          src={amberVideo} // Replace with the actual video path
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%", // Ensures the video spans the full container
            height: "auto", // Maintains the aspect ratio
            objectFit: "cover", // Ensures the video fills the container
            borderRadius: "10px", // Matches the border radius of the container
            cursor: "pointer",
          }}
        />
      </div>
    </Col>
  </Row>
</Container>


      {/* Countdown Section */}
      <Container style={{ textAlign: "center", padding: "50px 0" }}>
        <Row>
          <Col>
            <h2 style={{ color: "#00274D", fontWeight: "bold", marginBottom: "20px" }}>
              Pre-Order Countdown
            </h2>
            {timeLeft && (
              <div style={{ fontSize: "2rem", marginBottom: "20px", color: "#FFBF00" }}>
                {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
              </div>
            )}
            <p style={{ fontSize: "1.2rem", color: "#333" }}>
              Pre-orders will open in {timeLeft.days} days. Sign up now to be notified when it’s available!
            </p>
            {!submitted ? (
              <Form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #FFBF00",
                    }}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#FFBF00",
                    color: "#00274D",
                    border: "none",
                    padding: "10px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Button>
              </Form>
            ) : (
              <p style={{ color: "#00274D", fontWeight: "bold" }}>
                Thank you! We'll notify you as soon as pre-orders open.
              </p>
            )}
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#00274D",
          color: "#FFFFFF",
          padding: "20px 0",
          position: "relative",
        }}
      >
        <Container>
          <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
            {/* Logo and Branding */}
            <Col md={3} style={{ textAlign: "center" }}>
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#FFBF00",
                }}
              >
                Amber Accessories
              </h4>
              <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
                Creating a safer world, one discreet button at a time.
              </p>
              <img
                src={logo}
                alt="Amber Accessories Logo"
                style={{
                  width: "150px",
                  marginTop: "10px",
                }}
              />
            </Col>

            {/* Navigation Links */}
            <Col md={3} style={{ textAlign: "center" }}>
              <h5 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>Quick Links</h5>
              <Nav
                className="flex-column"
                style={{ gap: "10px", alignItems: "center", listStyle: "none" }}
              >
                <Nav.Link href="/" style={{ color: "#FFFFFF", fontSize: "0.9rem" }}>
                  Home
                </Nav.Link>
                <Nav.Link href="/aboutus" style={{ color: "#FFFFFF", fontSize: "0.9rem" }}>
                  About Us
                </Nav.Link>
                <Nav.Link href="/individuals" style={{ color: "#FFFFFF"  , fontSize: "0.9rem"}}>
                  In Their Memory
                </Nav.Link>
                <Nav.Link href="/product" style={{ color: "#FFFFFF", fontSize: "0.9rem" }}>
                  Product
                </Nav.Link>
                <Nav.Link href="/contact" style={{ color: "#FFFFFF", fontSize: "0.9rem" }}>
                  Contact
                </Nav.Link>
              </Nav>
            </Col>

            {/* Social Media */}
            <Col md={3} style={{ textAlign: "center" }}>
              <h5 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>Connect With Us</h5>
              <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFBF00", fontSize: "1.5rem" }}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFBF00", fontSize: "1.5rem" }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFBF00", fontSize: "1.5rem" }}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
              <p style={{ marginTop: "15px", fontSize: "0.9rem" }}>
                info@amber.com
              </p>
            </Col>
          </Row>

          {/* Copyright */}
          <Row>
            <Col style={{ textAlign: "center", fontSize: "0.8rem", marginTop: "15px" }}>
              <p>© 2024 AmbER. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Product;
