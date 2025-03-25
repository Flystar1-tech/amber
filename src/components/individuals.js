import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from "../images/amberlogo.png";

const individuals = [
  { name: "Amber Hagerman", story: "Abducted and murdered in 1996, inspiring the AMBER Alert system." },
  { name: "Brianna Kupfer", story: "Tragically murdered while working alone in 2022." },
  { name: "Elizabeth Smart", story: "Kidnapped in 2002 and rescued after nine months." },
  { name: "Jaycee Dugard", story: "Abducted in 1991 and held captive for 18 years." },
  { name: "Natalee Holloway", story: "Disappeared in Aruba in 2005; her case remains unsolved." },
  { name: "Mollie Tibbetts", story: "Abducted and murdered while jogging in 2018." },
  { name: "Hannah Graham", story: "University of Virginia student abducted in 2014." },
  { name: "Kelsey Smith", story: "Abducted from a parking lot in 2007; her body was found four days later." },
  { name: "Samantha Runnion", story: "A 5-year-old abducted and murdered in 2002." },
  { name: "Jessica Ridgeway", story: "A 10-year-old abducted and murdered in 2012." },
  { name: "Morgan Harrington", story: "Abducted and murdered in 2009 after a concert." },
  { name: "Chelsea King", story: "Abducted and murdered while jogging in 2010." },
  { name: "Laci Peterson", story: "Pregnant woman murdered in 2002; her case drew national attention." },
  { name: "Dru Sjodin", story: "Abducted and murdered in 2003." },
  { name: "Holly Bobo", story: "Abducted in 2011; her remains were found in 2014." },
  { name: "Chandra Levy", story: "Disappeared and murdered in 2001; her case gained national attention." },
  { name: "Eve Carson", story: "Student body president murdered in 2008 during a carjacking." },
  { name: "Aniah Blanchard", story: "Abducted and murdered in 2019." },
  { name: "Desiree Gibbon", story: "Found murdered in Jamaica in 2017." },
  { name: "Mikelle Biggs", story: "Disappeared in 1999 while waiting for an ice cream truck." },
];

const InteractiveGrid = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
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


      {/* Grid Section */}
      <Container style={{ padding: "60px 0", textAlign: "center" }}>
        <h2 style={{ color: "#00274D", fontWeight: "bold", marginBottom: "30px" }}>Remembering Lives</h2>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333", marginBottom: "30px" }}>
          Honoring those who might have been saved by Amber Accessories.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {individuals.map((individual, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                backgroundColor: "#FFBF00",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "transform 0.3s ease, background-color 0.3s ease",
                color: "#00274D",
                fontWeight: "bold",
                textAlign: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onClick={() => setSelected(individual)}
            >
              {individual.name}
            </div>
          ))}
        </div>

        {selected && (
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              backgroundColor: "#F9F9F9",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3 style={{ color: "#00274D", fontWeight: "bold" }}>{selected.name}</h3>
            <p style={{ color: "#333" }}>{selected.story}</p>
            <button
              style={{
                backgroundColor: "#FFBF00",
                border: "none",
                padding: "10px 20px",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#00274D",
                cursor: "pointer",
              }}
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        )}
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
                src={logo}
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

export default InteractiveGrid;
