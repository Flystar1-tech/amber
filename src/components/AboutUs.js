import React from "react";
import { Navbar, Nav, Button, Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHandshake, faLightbulb, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import teamImage from "../images/TeamImage.jpeg";
import tanya from "../images/tanyaCto.jpg"; // Replace with your actual image path
import amberLogo from "../images/amberlogo.png"; // Replace with your actual logo path
import statImage from "../images/stats.jpg"; // Replace with your actual stats image path
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <div>
         {/* Navbar */}
      <Navbar expand="lg" style={{ backgroundColor: "#00274D" }} variant="dark">
        <Container>
          <Navbar.Brand
            href="#"
            style={{ color: "#FFBF00", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Amber Accessories
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
      {/* Hero Section */}
      <div
        style={{
          backgroundColor: "#00274D",
          color: "#FFFFFF",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <Container>
          <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>About Us</h1>
          <p style={{ fontSize: "1.2rem", marginTop: "20px", maxWidth: "700px", margin: "0 auto" }}>
            Empowering safety through innovation and care.
          </p>
        </Container>
      </div>

      {/* Our Story */}
      <Container style={{ padding: "60px 0" }}>
        <Row>
          <Col md={6}>
            <h2 style={{ color: "#00274D", fontWeight: "bold", marginBottom: "20px" }}>Our Story</h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333" }}>
              Amber Accessories began as a student project, inspired by moments where we felt unsafe
              walking home late, navigating unfamiliar areas, or being in vulnerable situations. 
              Our experiences drove us to create a solution that provides peace of mind and security.
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333" }}>
              Inspired by the story of Amber Hagerman, we made it our mission to develop a product
              that not only ensures safety but also serves as a beacon of hope for individuals 
              everywhere. Amber Accessories isn’t just a product—it’s a promise to protect and empower.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={teamImage} // Replace with your image path
              alt="Our Team"
              style={{ width: "100%", borderRadius: "10px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Core Values */}
      <Container style={{ padding: "60px 0", backgroundColor: "#F9F9F9" }}>
        <Row>
          <Col md={12} style={{ textAlign: "center", marginBottom: "30px" }}>
            <h2 style={{ color: "#00274D", fontSize: "2.5rem", fontWeight: "bold" }}>Core Values</h2>
          </Col>
        </Row>
        <Row>
          {[
            { icon: faLightbulb, title: "Innovation", description: "Leading with cutting-edge technology to ensure safety." },
            { icon: faHandshake, title: "Empathy", description: "Designing with care and understanding for every individual." },
            { icon: faShieldAlt, title: "Safety", description: "Providing trust and protection when it's needed the most." },
          ].map((value, index) => (
            <Col key={index} md={4} style={{ textAlign: "center" }}>
              <FontAwesomeIcon icon={value.icon} size="3x" style={{ color: "#FFBF00", marginBottom: "15px" }} />
              <h4 style={{ color: "#00274D", fontWeight: "bold", marginBottom: "10px" }}>{value.title}</h4>
              <p style={{ color: "#555", fontSize: "1rem" }}>{value.description}</p>
            </Col>
          ))}
        </Row>
      </Container>

      <Container style={{ padding: "60px 0" }}>
      <Row>
        <Col md={6}>
          <h2 style={{ color: "#00274D", fontWeight: "bold", marginBottom: "20px" }}>
            Why Amber Accessories?
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333" }}>
            Safety statistics reveal the growing need for reliable solutions:
          </p>
          <div style={{ marginTop: "20px" }}>
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ color: "#FFBF00", fontWeight: "bold", fontSize: "2rem" }}>
                <CountUp end={360000} duration={10} separator="," />
              </h4>
              <p style={{ color: "#333", fontSize: "1rem" }}>Kidnapping cases reported globally in 2023</p>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ color: "#FFBF00", fontWeight: "bold", fontSize: "2rem" }}>
                <CountUp end={51} duration={10} suffix="%" />
              </h4>
              <p style={{ color: "#333", fontSize: "1rem" }}>Women feel unsafe walking alone at night</p>
            </div>
            <div>
              <h4 style={{ color: "#FFBF00", fontWeight: "bold", fontSize: "2rem" }}>
                <CountUp end={100000} duration={10} separator="," />
              </h4>
              <p style={{ color: "#333", fontSize: "1rem" }}>Children go missing annually in the US</p>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <img
            src={statImage}
            alt="Statistics"
            style={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Col>
      </Row>
    </Container>
      {/* Call to Action */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          color: "#00274D",
          padding: "50px 0",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
          Join Us in Our Mission
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          Pre-order Amber Accessories today and be a part of the movement to make the world safer.
        </p>
        <Button
          style={{
            backgroundColor: "#FFBF00",
            border: "none",
            padding: "10px 20px",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#00274D",
          }}
          href="/product"
        >
          Pre-Order Now
        </Button>
      </div>
      {/* Footer */}
      <div
        style={{
          backgroundColor: "#00274D",
          color: "#FFFFFF",
          padding: "20px 0",
        }}
      >
        <Container>
          <Row>
            {/* Logo and Branding */}
            <Col md={4} style={{ textAlign: "center" }}>
              <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#FFBF00" }}>
                Amber Accessories
              </h4>
              <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
                Creating a safer world, one discreet button at a time.
              </p>
              <img
                src={amberLogo}
                alt="Amber Accessories Logo"
                style={{
                  width: "150px",
                  marginTop: "10px",
                }}
              />
            </Col>

            {/* Navigation Links */}
            <Col md={4} style={{ textAlign: "center" }}>
              <h5 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>Quick Links</h5>
              <Nav className="flex-column" style={{ gap: "10px", alignItems: "center" }}>
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

            {/* Social Media and Email */}
            <Col md={4} style={{ textAlign: "center" }}>
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
                info@amberaccessories.com
              </p>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "center", fontSize: "0.8rem", marginTop: "15px" }}>
              <p>© 2024 Amber Accessories. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
