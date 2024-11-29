import React from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import amberImage from "../images/amber1.jpg";
import amberVideo from "../images/amberTechdemo.mp4"
import logo from "../images/amberlogo.png";


const Home = () => {
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
            >
              Pre-Order Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     {/* Hero Section */}
<div
  style={{
    backgroundImage: `url(${amberImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    animation: "fadeIn 2s ease-in-out",
    position: "relative",
    overflow: "hidden", // Ensures any overflow from animation stays contained
  }}
>
  {/* Animated Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(255, 191, 0, 0.2))",
      zIndex: 1,
      pointerEvents: "none",
    }}
  ></div>

  <h1
    style={{
      fontSize: "4rem",
      fontWeight: "bold",
      marginBottom: "20px",
      zIndex: 2,
      animation: "fadeSlideIn 1.5s ease",
    }}
  >
    Amber Accessories
  </h1>
  <p
    style={{
      fontSize: "1.5rem",
      maxWidth: "600px",
      marginBottom: "30px",
      zIndex: 2,
      animation: "fadeSlideIn 2s ease",
    }}
  >
    Creating a safer world, one discreet button at a time.
  </p>
  <div style={{ display: "flex", gap: "15px", zIndex: 2 }}>
    <a href="/aboutus">
      <button
        style={{
          backgroundColor: "#FFFFFF",
          color: "#00274D",
          padding: "10px 20px",
          fontSize: "1rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-3px)";
          e.target.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "none";
        }}
      >
        Learn More
      </button>
    </a>
    <Button
      style={{
        backgroundColor: "#FFBF00",
        border: "none",
        color: "#00274D",
        padding: "15px 30px",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "translateY(-3px)";
        e.target.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "none";
      }}
      href="/product"
    >
      Pre-Order Now
    </Button>
  </div>
</div>


{/* Heartfelt Story Section */}
<Container style={{ padding: "50px 0" }} id="aboutus">
  <Row style={{ alignItems: "center" }}>
    {/* Text Section */}
    <Col md={6} style={{ zIndex: 2 }}>
      <h2
        style={{
          color: "#00274D",
          fontWeight: "bold",
          fontSize: "2.5rem",
          marginBottom: "20px",
          fontFamily: "'Roboto', sans-serif",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Add text shadow for depth
        }}
      >
        Our Mission
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#333",
          marginBottom: "15px",
          animation: "fadeIn 2s ease-in-out",
        }}
      >
       Our mission is to revolutionize personal safety by providing innovative, discreet, and reliable solutions that empower individuals to feel secure wherever they are. Through cutting-edge technology and thoughtful design, we aim to create a safer world, where no one feels vulnerable or alone, and every individual can confidently reclaim their freedom and peace of mind.
      </p>
    </Col>

    {/* Video Section */}
<Col md={6} style={{ position: "relative" }}>
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

 {/* Features Section */}
<Container
  style={{
    padding: "60px 0",
    background: "#FFFFFF", // White background
    borderRadius: "10px",
  }}
>
  <Row>
    <Col md={12} style={{ textAlign: "center", marginBottom: "40px" }}>
      <h2
        style={{
          color: "#00274D",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        Why Amber?
      </h2>
    </Col>
  </Row>
  <Row>
    {[
      {
        title: "GPS Tracking",
        description: "Real-time location updates to ensure you’re always connected.",
        icon: "🛰️",
      },
      {
        title: "Geo-Fencing",
        description: "Stay notified when loved ones enter or exit safe zones.",
        icon: "📍",
      },
      {
        title: "Satellite Communication",
        description: "Seamless connectivity, no matter where you are.",
        icon: "📡",
      },
    ].map((feature, index) => (
      <Col
        key={index}
        md={4}
        style={{
          textAlign: "center",
          marginBottom: "30px",
          animation: `fade-in 1.2s ease ${index * 0.2}s forwards`,
          opacity: 0,
        }}
        className="feature-box"
      >
        <div
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
            color: "#FFBF00",
            transition: "transform 0.3s ease",
          }}
          className="feature-icon"
        >
          {feature.icon}
        </div>
        <h4
          style={{
            color: "#FFBF00",
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginBottom: "10px",
          }}
        >
          {feature.title}
        </h4>
        <p style={{ color: "#333", fontSize: "1rem", lineHeight: "1.6" }}>
          {feature.description}
        </p>
      </Col>
    ))}
  </Row>
</Container>



    {/* Recap Section */}
<div
  style={{
    backgroundColor: "#FFBF00",
    padding: "50px 0",
    textAlign: "center",
    color: "#00274D",
  }}
>
  <h3
    style={{
      fontSize: "2.5rem",
      fontWeight: "bold",
      fontFamily: "'Roboto', sans-serif",
      marginBottom: "20px",
    }}
  >
    Amber in Numbers
  </h3>
  <p
    style={{
      fontSize: "1.2rem",
      maxWidth: "600px",
      margin: "0 auto 40px",
      lineHeight: "1.6",
    }}
  >
    Amber Accessories is making a difference. Here’s a snapshot of what we’ve achieved so far.
  </p>
  <Container>
    <Row>
      {[
        { stat: "61%", label: "YES to Amber" },
        { stat: "54%", label: "Safety Concerns" },
        { stat: "57+", label: "Respondents" },
      ].map((item, index) => (
        <Col
          key={index}
          md={4}
          style={{
            padding: "20px",
            opacity: 0,
            transform: "translateY(10px)",
            animation: `fade-in 1s ease ${index * 0.3}s forwards`,
          }}
          className="recap-box"
        >
          <h4
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#00274D",
              marginBottom: "10px",
            }}
          >
            {item.stat}
          </h4>
          <p
            style={{
              fontSize: "1.1rem",
              margin: "0",
              color: "#333",
            }}
          >
            {item.label}
          </p>
        </Col>
      ))}
    </Row>
  </Container>
</div>

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
          src={logo} // Replace with the actual path to your logo
          alt="Amber Accessories Logo"
          style={{
            width: "150px", // Adjust size as needed
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

      {/* Social Media and Email */}
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
        {/* Email Us Section */}
        <div style={{ marginTop: "20px" }}>
          <h5
            style={{
              fontSize: "1rem",
              color: "#FFFFFF",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
            onClick={() => {
              const form = document.getElementById("emailForm");
              if (form.style.display === "none") {
                form.style.display = "block";
              } else {
                form.style.display = "none";
              }
            }}
          >
            Email Us <span style={{ fontSize: "1.2rem" }}>+</span>
          </h5>
          <div id="emailForm" style={{ display: "none", marginTop: "10px" }}>
            <form action="mailto:info@amberaccessories.com" method="post" encType="text/plain">
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  width: "90%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #FFBF00",
                }}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  width: "90%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #FFBF00",
                }}
                required
              />
              <textarea
                placeholder="Your Message"
                style={{
                  width: "90%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #FFBF00",
                  resize: "none",
                  height: "80px",
                }}
                required
              ></textarea>
              <button
                type="submit"
                style={{
                  backgroundColor: "#FFBF00",
                  color: "#00274D",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Col>
    </Row>

    {/* Copyright */}
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

export default Home;
