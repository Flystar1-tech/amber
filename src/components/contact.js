import React from "react";
import { Navbar, Nav, Button, Container, Row, Col, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import amberLogo from "../images/amberlogo.png";

const categories = [
    {
      title: "General Questions",
      color: "#00274D",
      questions: [
        {
          question: "What is AmbER?",
          answer:
            "AmbER is a discreet, wearable safety device designed to provide immediate assistance in emergencies. It allows users to alert emergency contacts, share real-time GPS locations, and access additional features like geo-fencing and satellite tracking (Premium model).",
        },
        {
          question: "How does AmbER work?",
          answer:
            "When the device is pressed more than once within 10 seconds, it sends real-time GPS alerts to your preset emergency contacts, emergency services, and a connected mobile app. Additionally, it includes features like geo-fencing to notify you if a loved one leaves a designated safe zone. This multi-press activation ensures accidental alerts are minimized, providing a reliable and thoughtful safety solution."
        },
        {
          question: "Who can benefit from AmbER?",
          answer:
            "AmbER is ideal for college students, elderly individuals, parents, travelers, and anyone concerned about personal safety.",
        },
      ],
    },
    {
      title: "Features and Functionality",
      color: "#00274D",
      questions: [
        {
          question: "Does AmbER require a smartphone to work?",
          answer:
            "No, Amber operates independently of smartphones, ensuring it works even when your phone is out of reach. However, the mobile app provides additional functionality like location tracking and notifications.",
        },
        {
          question: "What is the difference between the Basic and Premium models?",
          answer:
            "The Basic model includes LTE/Wi-Fi connectivity for GPS tracking and alerts. The Premium model adds satellite-enabled tracking for global coverage, ensuring it works even in remote areas without cellular coverage.",
        },
        {
          question: "Can the device detect false alarms?",
          answer:
            "AmbER uses a dual-layered approach to minimize false alarms. When the device is pressed **more than once within 10 seconds**, it activates and sends real-time GPS alerts to your preset emergency contacts, emergency services, and a connected mobile app. Additionally, the device leverages AI to analyze user actions and environmental factors, further reducing the chances of accidental alerts. This ensures that assistance is only sent when truly needed, offering a reliable and intelligent safety solution.",
        },
      ],
    },
    {
      title: "Usage",
      color: "#00274D",
      questions: [
        {
          question: "How do I activate the panic button?",
          answer:
            "Simply press the central button on the device for 5 seconds to send an alert. The LED will blink, and the vibration motor will provide tactile feedback to confirm activation.",
        },
        {
          question: "Can I customize who receives my emergency alerts?",
          answer:
            "Yes, through the AmbER mobile app, you can set and manage your emergency contacts.",
        },
        {
          question: "How is the device attached to accessories?",
          answer:
            "Amber can be clipped, magnetically attached, or integrated into items like rings, earrings, bags, and belts for versatile use.",
        },
      ],
    },
    {
      title: "Battery and Charging",
      color: "#00274D",
      questions: [
        {
          question: "How long does the battery last?",
          answer: "AmbERhas a battery life of up to 3 days on a single charge, depending on usage.",
        },
        {
          question: "How do I charge the device?",
          answer:
            "Amber comes with an AirPod-style charging case. Simply place the device in the case, and the LED indicators will show the charging progress.",
        },
        {
          question: "How long does it take to charge?",
          answer: "The device takes approximately 2 hours to fully charge.",
        },
      ],
    },
    {
      title: "Connectivity",
      color: "#00274D",
      questions: [
        {
          question: "Does AmbER work internationally?",
          answer:
            "Yes, the Premium model with satellite connectivity provides global coverage, making it ideal for travelers.",
        },
        {
          question: "Does the device require an internet connection?",
          answer:
            "The Basic model uses LTE/Wi-Fi for connectivity, while the Premium model uses satellite for areas without cellular service.",
        },
        {
            question: "Can AmbER function in remote areas without network coverage?",
            answer:
              "Yes, the Premium model of Amber Accessories is equipped with satellite tracking, allowing it to work in remote areas where cellular service is unavailable. This ensures safety and connectivity anytime, anywhere."}
      ],
    },
    {
      title: "Safety and Privacy",
      color: "#00274D",
      questions: [
        {
          question: "Is my location data secure?",
          answer:
            "Yes, AmbER uses end-to-end encryption to ensure your location data and alerts are private and secure.",
        },
        {
          question: "Can I track my loved ones with this device?",
          answer:
            "Yes, with their permission, you can monitor their location in real time through the mobile app.",
        },
        {
          question: "Will the GPS work without a subscription?",
          answer:
            "Basic functionality is included, but advanced features like satellite tracking and geo-fencing require an active subscription.",
        },
      ],
    },
    {
      title: "Miscellaneous",
      color: "#00274D",
      questions: [
        {
          question: "Can the device be used by children?",
          answer:
            "Yes, AmbER is suitable for children and can help parents monitor their location and safety. For users below the legal age of a child as defined by specific countries, the default settings include continuous monitoring and geo-fencing, enabling parents to track their location in real time and establish virtual safe zones. Parents have the flexibility to adjust these settings based on their preferences or specific needs, ensuring the device is both user-friendly and adaptable.",
        },
        {
          question: "How does AmbER contribute to the UN SDGs?",
          answer:
            "AmbER aligns with UN SDG 3: Good Health and Well-being by promoting personal safety and reducing the risk of harm in emergencies.",
        },
        {
          question: "Can the device be used in areas without network coverage?",
          answer:
            "Yes, the Premium model with satellite tracking is specifically designed for remote areas with no cellular coverage.",
        },
      ],
    },
  ];
const Contact = () => {
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

      {/* Hero Section */}
      <div
        style={{
          backgroundColor: "#FFBF00",
          padding: "80px 20px",
          textAlign: "center",
          color: "#00274D",
        }}
      >
        <Container>
          <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>Contact Us</h1>
          <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
            We're here to assist you. Reach out with your questions or concerns, or explore the FAQs below for quick answers.
          </p>
        </Container>
      </div>

      {/* Contact Form */}
      <Container style={{ padding: "50px 0" }}>
        <Row>
          <Col md={6}>
            <h2 style={{ color: "#00274D", fontWeight: "bold", marginBottom: "20px" }}>
              Get in Touch
            </h2>
            <form action="mailto:info@amberaccessories.com" method="post" encType="text/plain">
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  width: "100%",
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
                  width: "100%",
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
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #FFBF00",
                  resize: "none",
                  height: "100px",
                }}
                required
              ></textarea>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#FFBF00",
                  color: "#00274D",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Send
              </Button>
            </form>
          </Col>
          <Col md={6}>
            <h2 style={{ color: "#00274D", fontWeight: "bold", marginBottom: "20px" }}>
              Connect With Us
            </h2>
            <p>Follow us on social media or drop us an email!</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", fontSize: "1.5rem" }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#FFBF00" }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#FFBF00" }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#FFBF00" }}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* FAQs Section */}

      <Container style={{ padding: "50px 0" }}>
  <h2 style={{ textAlign: "center", color: "#FFBF00", marginBottom: "30px" , fontWeight: "bold"}}>
    Frequently Asked Questions
  </h2>
  <Row className="justify-content-center">
    {categories.map((category, index) => (
      <Col
        md={6} // Adjusts to 6 columns for two-column layout
        sm={12} // Full width on small screens
        key={index}
        style={{ marginBottom: "20px" }}
      >
        <div
          style={{
            backgroundColor: category.color,
            color: "#FFFFFF",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h5
            style={{
              fontWeight: "bold",
              marginBottom: "15px",
              textAlign: "center", // Center aligns the title
            }}
          >
            {category.title}
          </h5>
          <Accordion>
            {category.questions.map((q, i) => (
              <Accordion.Item eventKey={`${index}-${i}`} key={i}>
                <Accordion.Header>{q.question}</Accordion.Header>
                <Accordion.Body>{q.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Col>
    ))}
  </Row>
</Container>


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
                AmbER
              </h4>
              <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
                Creating a safer world, one discreet button at a time.
              </p>
              <img
                src={amberLogo}
                alt="AmbER Logo"
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
                info@amber.com
              </p>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "center", fontSize: "0.8rem", marginTop: "15px" }}>
              <p>© 2024 AmbER. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
